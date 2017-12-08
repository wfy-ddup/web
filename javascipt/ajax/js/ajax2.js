var currentPage = {
  onceLoadNum : 3,
  starPos : 0,
  countData:null,

  //拼接数据
  joinHtml : function(obj){
    $(".table_01 tbody").empty();
    var str = "",i,n;
    for(i = this.starPos; i < this.onceLoadNum; i++){
      str +='<tr><td><div class="ov"><span class="check_btn"></span>'
            +'<span class="product_img">'
            +'<img alt="" class="wp100 hp100" src="'+obj[i].productImage+'"/>'
            +'</span><div class="ov">'
            +'<p class="fz14 cor_1 mb5">'+obj[i].productName+'</p>'
            +'<div class="ov gift"><span class="txt">赠品:</span><div class="ov">';

      for(n = 0; n < obj[i].parts.length; n++){
        str += '<span class="gift_name">'+obj[i].parts[n].partName+'</span>';
      }

      str +='</div></div></div></div></td>'
            +'<td class="tac fz16 cor_02 product-price">￥'+obj[i].productPrice.toFixed(2)+'元</td>'
            +'<td class="tac"><span class="reduce_btn btn_subtract">-</span>'
            +'<input class="ipt_01" type="text" value="'+obj[i].productQueutity+'"><span class="reduce_btn">+</span></td>'
            +'<td class="tac fz16 cor_04 one-total">￥'+(parseInt(obj[i].productQueutity)*parseInt(obj[i].productPrice)).toFixed(2)+'元</td>'
            +'<td class="tac"><span class="del_btn_01">删除</span></td></tr>';                   
    }
    $(".table_01 tbody").append( str );
    var operate = this.pageOperate;
    operate.changeNum();
    operate.delOrCheck();
  },

  pageOperate:{
    // 单选 全选 删除
    delOrCheck:function(){
      var _this = this;
      $(".table_01 .del_btn_01").click(function(){
        $(this).parents("tr").remove();
        _this.countTotal();
      });

      $(".table_01 .check_btn").click(function(){
        $(this).toggleClass("checked");
        _this.countTotal();
      });

      $(".table_01 .all_check").click(function(){
        $(this).toggleClass("checked");
        $(this).hasClass("checked")?$(this).parents(".table_01").find(".check_btn").addClass("checked"):$(this).parents(".table_01").find(".check_btn").removeClass("checked");
        _this.countTotal();
      });

      $(".table_01 .btn_no_product").click(function(){
        $(this).siblings("all_check").removeClass("checked");
        $(this).parents(".table_01").find(".check_btn").removeClass("checked");
        _this.countTotal();
      });
    },
    //改变商品的数量
    changeNum:function(){
      var _this = this;
      $(".reduce_btn").click(function(){
        var curVal = $(this).siblings(".ipt_01").val()-0;
        if($(this).hasClass("btn_subtract")){
          curVal == 1 ? 0 : curVal -= 1;
        }else{
          curVal += 1;
        }
        $(this).siblings(".ipt_01").val(curVal);

        //计算单个的金额
        _this.oneTotal.call(this);
        _this.countTotal();
      });
      _this.countTotal();
    },
    //计算单件商品的金额
    oneTotal:function(){
      var item = $(this).parents("tr"),
          num = item.find(".ipt_01").val()-0,
          price = item.find(".product-price").text().slice(1,-1)-0;
      var curTotal = (num * price).toFixed(2);
      item.find(".one-total").html("￥"+curTotal+"元");
    },
    // 计算总钱数
    countTotal:function(){
      var itemTrs = $(".table_01 tbody").find("tr"),
          //i,
          countMoney = 0,   //总金额
          curMoney = 0,     //被勾选产品的金额
          checkedAll=[],
          isChecked ; // 产品被勾选

      /**
        for(i = 0; i < itemTrs.length; i++){
          isChecked = itemTrs.eq(i).find(".check_btn").hasClass("checked");
          if(isChecked){
            checkedAll.push({
              "eq":i,
              "check":true
            });
            curMoney = itemTrs.eq(i).find(".one-total").html().slice(1,-1)-0; 
            countMoney += curMoney;
          }
        }
      **/

      itemTrs.each(function(index){
        isChecked = $(this).find(".check_btn").hasClass("checked");
        if(isChecked){
          checkedAll.push({
            "eq":index,
            "check":true
          });
          curMoney = $(this).find(".one-total").html().slice(1,-1)-0; 
          countMoney += curMoney;
        }
      });
      countMoney = countMoney.toFixed(2);
      $(".table_01").find(".countMoney").html("￥"+countMoney+"元");
      checkedAll.length == itemTrs.length?$(".table_01").find(".all_check").addClass("checked")
      :$(".table_01").find(".all_check").removeClass("checked");
    }
  },

  init:function(){
    var _this = this;
    $.ajax({
      type:"GET",
      url:"data/data.json",
      dataType:"json",
      success:function(data){
        _this.countData = data.list;
        _this.joinHtml(_this.countData);
      }
    });

    $(".btn_1").click(function(){
      if( _this.onceLoadNum > _this.countData.length ){
        return false
      }
      _this.onceLoadNum += 3;
      _this.starPos += 3;
      _this.joinHtml(_this.countData);
    });

  }


}

window.onload = currentPage.init()