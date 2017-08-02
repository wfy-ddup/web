new Vue({
  el:"#box",
  data:{
    title:"hello vue",
    totalMoney:0,
    checkAllFlag:false,
    delFlag:false,
    curProduct:'',
    productList:[]
  },
  // 局部过滤器
  filters:{
    formatMoney:function(value){
      return "￥"+value.toFixed(2);
    }
  },
  mounted:function(){
    this.$nextTick(function(){
      this.cartView();
    });
    
  },
  methods:{ // 绑定的事件

    cartView:function(){
      //  es6 语法 
      let _this = this;
      this.$http.get("json/data.json",{"id":123}).then(res => {
         this.productList = res.body.result.list;
      });
    },
    changeMoney:function(product,way){
      if(way>0){
        product.productQuentity++;
      }else{        
        product.productQuentity<=1?product.productQuentity=1:product.productQuentity--;
      }
      this.calcTotalPrice();
    },
    selectProduct:function(item){
      if(typeof item.checked == "undefined"){
        //全局注册一个新的变量，让vue监听
        //Vue.set(item,"checked",true);
        //局部注册
        this.$set(item,"checked",true);
      }else{
        item.checked = !item.checked;          
      }
      var isCheckedAll = this.productList.every(function(val,index){
            return val.checked == true;
          }); 
      isCheckedAll ? this.checkAllFlag = true : this.checkAllFlag = false;
      this.calcTotalPrice();
    },
    checkAll:function(flag){
      this.checkAllFlag = flag;
      var _this = this;
      this.productList.forEach(function(item,index){
         if(typeof item.checked == "undefined"){
            _this.$set(item,"checked",_this.checkAllFlag);
          }else{
            item.checked = _this.checkAllFlag;
          }
      });
      this.calcTotalPrice();
      
    },
    calcTotalPrice:function(){
      var _this = this;
      this.totalMoney = 0;
      this.productList.forEach(function(item,index){
        if(item.checked){
          _this.totalMoney += item.productPrice * item.productQuentity;
        }
      })
    },
    delConfirm:function(item){
      this.delFlag = true;
      this.curProduct = item;
    },
    delProduct:function(){
      var index = this.productList.indexOf(this.curProduct)
      this.productList.splice(index,1);
      this.delFlag = false;
      var isCheckedAll = this.productList.every(function(val,index){
            return val.checked == true;
          }); 
      isCheckedAll ? this.checkAllFlag = true : this.checkAllFlag = false;
      this.calcTotalPrice();
    }

  }
});

// 全局过滤器
Vue.filter("money",function(value,type){
  return "￥"+value.toFixed(2)+type;
});