new Vue({
  el:"#box",
  data:{
    addressList:[],
    limitNum:3,
    shoppingMethods:1,
    currentIndex:0
  },
  mounted:function(){
    this.$nextTick(function(){
      this.getAddressList();
    });
  },
  computed:{
    filterAddress:function(){
      return this.addressList.slice(0,this.limitNum);
    }
  },
  methods:{
    getAddressList:function(){
      var _this = this;
      this.$http.get("json/address.json").then(function(reponse){
        var res = reponse.data;
        if(res.status == 0){
          _this.addressList = res.result;
        }
      });
    },
    deletAddress:function(index){
      this.addressList.splice(index,1);
    },
    setDefault:function(addressId){
      this.addressList.forEach(function(address,index){
        if(address.addressId ==addressId){
          address.isDefault = true;
        }else{
          address.isDefault = false;
        }
      });
    }
  }

});