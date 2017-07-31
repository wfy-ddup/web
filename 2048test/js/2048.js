var game = {
  elemsCountArray : [],                         //对象数组，二维数组保存着所有的 grid
  canPlay :false,                               //加载完继续
  firstLoad : true,                            // 首次加载
  gridNum : Number( window.sessionStorage.getItem('game2048Grids') ) || 4,
  score : 0,
  //初始化函数
  init : function(id){
    this.contian =  document.getElementById(id);                      // 容器
    this.createElems();                                               //添加所有的小格
    this.scoreElem = this.contian.getElementsByClassName("detailScore")[0];
  },

  //添加所有的小格
  createElems : function(){  
		this.gridClassName = 'grid' + this.gridNum ;

    var rowBox = document.createElement("div");
    rowBox.className = "rowBox";
    for(var i = 0; i < this.gridNum; i++){
      var rowGrid = document.createElement("div");
      rowGrid.className = "rowGrid";
      for(var j = 0, gridArr = []; j < this.gridNum; j++ ){
        var grid = document.createElement("div");
        grid.className = this.gridClassName;
        gridArr.push(grid);
        rowGrid.appendChild(grid);
      }
    this.elemsCountArray.push(gridArr);
    rowBox.appendChild(rowGrid);
    }

    var topScoreElem = document.createElement("div"),
        sideSpanElem = document.createElement('span');

    topScoreElem.className = 'score';
    topScoreElem.innerHTML = '得分 : ';
    sideSpanElem.innerHTML = '0';
    sideSpanElem.className = 'detailScore';

    topScoreElem.appendChild( sideSpanElem );

    this.contian.appendChild( topScoreElem );
    this.contian.appendChild( rowBox );
    this.ElemStyle();   // 添加样式
    this.searchEmptyGrids();   //读取格子

  },

  //设置元素的宽高
  ElemStyle : function(){
    
    var elems = this.contian.getElementsByClassName(this.gridClassName),
        winH = window.innerHeight;
    this.contian.style.height = winH +"px";
    this.fixedBox = document.getElementsByClassName("gameOver")[0];
    this.fixedBox.style.lineHeight = winH +"px";

  },
  
  //检测没有内容的小格，并添加 2 4
  searchEmptyGrids : function(){
    var emptyGrids = [],     // 保存所有为空的格子
        elemsArr = this.elemsCountArray;
    for(var i = 0; i < elemsArr.length; i++){                                  //获取为空的对象
      for(var j = 0; j < elemsArr.length; j++){
        elemsArr[i][j].innerHTML === '' ? emptyGrids.push( elemsArr[i][j] ) : 0;
      }
    }
    var canAddNum = emptyGrids.length != 0 ? 1 : 0;
    if( canAddNum = this.firstLoad ? 2 : canAddNum ){
      for( var t = 0; t < canAddNum; t++ ){
        var n = Math.floor( Math.random() * emptyGrids.length );
        Math.random() > 0.5 ? emptyGrids[n].innerHTML = 2 : emptyGrids[n].innerHTML = 4;
        emptyGrids.splice(n,1);
      }
    this.firstLoad = false;
    this.againGetCountArray();                            // 随机生成两个数后立即执行遍历获取新的数组
    this.canMove();                                       // 检测是否可以单方向移动
    this.canPlay = true;
    }
    
  },

  // 重新获取对象数组，二维数组保存着所有的 grid
  againGetCountArray : function(){
    var rows = this.contian.getElementsByClassName("rowBox");

    for(var i = 0; i < rows.length;i++){
      for(var j = 0; j < rows.length; j++){
        this.elemsCountArray[i][j] = rows[i].getElementsByClassName(this.gridClassName)[j];
      }
    }
    
    for(var n = 0; n < this.elemsCountArray.length; n++){
      for(var k = 0; k < this.elemsCountArray.length; k++){
        var numHowLarge = Number(this.elemsCountArray[n][k].innerHTML);
        if(numHowLarge < 128){ this.elemsCountArray[n][k].style.background = ''; }
        if(numHowLarge >= 128 && numHowLarge <= 512){ this.elemsCountArray[n][k].style.background = 'rgba(250,230,185,0.4)'; }
        if(numHowLarge > 512 && numHowLarge <= 2048){ this.elemsCountArray[n][k].style.background = 'rgba(250,160,90,0.4)'; }
        if(numHowLarge > 2048 && numHowLarge <= 8192){ this.elemsCountArray[n][k].style.background = 'rgba(250,110,90,0.4)'; }
        if(numHowLarge > 8192 ){ 
          this.elemsCountArray[n][k].style.background = 'rgba(255,40,0,0.4)';
          this.elemsCountArray[n][k].style.fontSize = '14px';
        }
      }
    }
   
    //debugger;

  },

  //计算得分
  computeScore : function(obj){
    var thisElem = this.scoreElem,
        onceScore = Number( obj.innerHTML ),
        countScore = Number( thisElem.innerHTML );
    this.score = countScore + onceScore;
    thisElem.innerHTML = this.score;

  },
  
  // 往左滑动方法
  slideLeft : function(){
    if(this.canPlay && this.canMoveLeft){ this.canPlay = false }else{ return false }
    var stepAndNum = 0,
        curElemsArray = this.elemsCountArray,
        len = curElemsArray.length;
    // 检测是否可以向左相加
    for(var i = 0; i < len; i++){      
      outerOne:
      for(var j = 0; j < len ; j++){
        stepAndNum = Number( curElemsArray[i][j].innerHTML );
        outerZero:
        for(var k = j; k < len - 1; k++){
          var nextTxtIsNum = Number( curElemsArray[i][k+1].innerHTML );
          switch(true){
            case !nextTxtIsNum :
              continue outerZero;
            case nextTxtIsNum !== stepAndNum :
              continue outerOne;
            case nextTxtIsNum === stepAndNum :
              curElemsArray[i][j].innerHTML = 2 * Number( curElemsArray[i][j].innerHTML );
              curElemsArray[i][k+1].innerHTML = '';
              this.computeScore( curElemsArray[i][j] );
              continue outerOne;
          }
        }
      }
    }
    // 向左移动移动位置
    for(var i = 0; i < len; i++){
      gridTxtMoveleft:
      for(var d = 0; d < len; d++){
        if(curElemsArray[i][d].innerHTML === ''){                                   //如果第一个是空 
          stepAndNum = d;                                                           //将下标d的值 给stepAndNum
          for(var n = d+1; n < len; n++){                                           //再重下标为d初开始，往后遍历到到第二个
            if(curElemsArray[i][n].innerHTML !== ''){                               // 在d后面找到第一个不为空的
              curElemsArray[i][stepAndNum].innerHTML = curElemsArray[i][n].innerHTML;  //将此值赋值给之前一个空的
              curElemsArray[i][n].innerHTML = '';                                   // 再将此值的位置设为空
              continue gridTxtMoveleft;                                             // 跳出重下一个开始
            }
          }
        }
      }

    }
    
    this.againGetCountArray();                                                      //  重新获取总数组

    this.searchEmptyGrids();                                                        //  检测没有内容的小格，并添加 2 4


  },

  //往右滑动的方法
  slideRight : function(){
    if( this.canPlay && this.canMoveRight ){this.canPlay = false } else {  return false } 
    var stepAndNum = 0,
        curElemsArray = this.elemsCountArray,
        len = curElemsArray.length;
    for(var i = 0; i < len; i++){                    // i 行
      outerOne:
      for(var j = len - 1; j > 0; j--){              //j 倒数第几个小格
        stepAndNum =Number( curElemsArray[i][j].innerHTML );  
        
        outerZero:
        for(var n = j; n > 0; n--){                  //n 小格之前的一个
          var prevTxtIsNum = Number( curElemsArray[i][n-1].innerHTML );
          switch( true ){
            case !prevTxtIsNum :
              continue outerZero;
            case prevTxtIsNum !==  stepAndNum :
              continue outerOne;
            case prevTxtIsNum === stepAndNum :
              //debugger;
              curElemsArray[i][j].innerHTML = 2*Number( curElemsArray[i][n-1].innerHTML );
              curElemsArray[i][n-1].innerHTML = '';
              this.computeScore( curElemsArray[i][j] );
              continue outerOne;
          }
        }
      }
    }

    // 向右移动移动位置
    for(var i = 0; i < len; i++){
      gridTxtMoveleft:
      for(var d = len - 1; d > 0; d--){
        if(curElemsArray[i][d].innerHTML === ''){                                   
          stepAndNum = d;                                                           
          for(var n = d; n > 0; n--){                                           
            if(curElemsArray[i][n-1].innerHTML !== ''){                               
              curElemsArray[i][stepAndNum].innerHTML = curElemsArray[i][n-1].innerHTML;  
              curElemsArray[i][n-1].innerHTML = '';                                   
              continue gridTxtMoveleft;                                             
            }
          }
        }
      }
    }

    this.againGetCountArray();                                                      //  重新获取总数组

    this.searchEmptyGrids();                                                        //  检测没有内容的小格，并添加 2 4


  },

	//往上滑动的方法
	slideUp : function(){
		if(this.canPlay && this.canMoveUp){ this.canPlay = false }else{ return false }
    var stepAndNum = 0,
        curElemsArray = this.elemsCountArray,
        len = curElemsArray.length;

		//  往下 相加
    for(var i = 0; i < len; i++){                                     // i 列  每次遍历 列是不变的   从下往上遍历    
      outerOne:                                                       // 跳转到下一行
      for(var j = 0; j < len; j++){																		// j 行  行递加的
        stepAndNum = Number( curElemsArray[j][i].innerHTML );         // 最后一行第一个值
        outerZero:                                                    // 跳转到下一行
        for(var k = j; k < len - 1; k++){                                   
          var upTxtIsNum = Number( curElemsArray[k+1][i].innerHTML );      
          switch( true ){
            case !stepAndNum || ( (upTxtIsNum !== 0) && ( stepAndNum !== upTxtIsNum ) ):
              continue outerOne;
						case stepAndNum && upTxtIsNum === 0:
							continue outerZero;
            case stepAndNum === upTxtIsNum :
              curElemsArray[j][i].innerHTML = 2 * Number( curElemsArray[k+1][i].innerHTML );
              curElemsArray[k+1][i].innerHTML = '';
              this.computeScore( curElemsArray[j][i] );
              continue outerOne;
          }
        }
      }
    }


		// 往下挪位子
		for(var i = 0; i < len; i++){
			gridTxtMoveUp:
			for(var j = 0; j < len; j++){
				if( curElemsArray[j][i].innerHTML === '' ){
					for(var d = j; d < len -1; d++ ){
						if(curElemsArray[d+1][i].innerHTML !== ''){                               
              curElemsArray[j][i].innerHTML = curElemsArray[d+1][i].innerHTML;  
              curElemsArray[d+1][i].innerHTML = '';                                   
              continue gridTxtMoveUp;                                             
            }
					}
				}
			}
		}
		
		this.againGetCountArray();                                                      //  重新获取总数组

    this.searchEmptyGrids();                                                        //  检测没有内容的小格，并添加 2 4


	},

	//往下滑动的方法
  slideDown : function(){                                //向下滑动的
    if(this.canPlay && this.canMoveDown){ this.canPlay = false }else{ return false }
    var stepAndNum = 0,
        curElemsArray = this.elemsCountArray,
        len = curElemsArray.length;

		//  往下 相加
    for(var i = 0; i < len; i++){                                     // i 列  每次遍历 列是不变的   从下往上遍历    
      outerOne:                                                       // 跳转到下一行
      for(var j = len -1; j > 0; j--){                                // j 行  行递加的
        stepAndNum = Number( curElemsArray[j][i].innerHTML );         // 最后一行第一个值
        outerZero:                                                    // 跳转到下一行
        for(var k = j; k > 0; k--){                                   //  遍历下一行的第一个
          var upTxtIsNum = Number( curElemsArray[k-1][i].innerHTML );      // 下一行的第一个值
					//debugger;
          switch( true ){
            case !stepAndNum || ( (upTxtIsNum !== 0) && ( stepAndNum !== upTxtIsNum ) ):
              continue outerOne;
						case stepAndNum && upTxtIsNum === 0:
							continue outerZero;
            case stepAndNum === upTxtIsNum :
              curElemsArray[j][i].innerHTML = 2 * Number( curElemsArray[k-1][i].innerHTML );
              curElemsArray[k-1][i].innerHTML = '';
              this.computeScore( curElemsArray[j][i] );
              continue outerOne;
          }
        }
      }
    }


		// 往下挪位子
		for(var i = 0; i < len; i++){
			gridTxtMoveDown:
			for(var j = len - 1; j > 0; j--){
				if( curElemsArray[j][i].innerHTML === '' ){
					for(var d = j; d > 0; d-- ){
						if(curElemsArray[d-1][i].innerHTML !== ''){                               
              curElemsArray[j][i].innerHTML = curElemsArray[d-1][i].innerHTML;  
              curElemsArray[d-1][i].innerHTML = '';                                   
              continue gridTxtMoveDown;                                             
            }
					}
				}
			}
		}

    this.againGetCountArray();                                                      //  重新获取总数组

    this.searchEmptyGrids();                                                        //  检测没有内容的小格，并添加 2 4


  },
  

  gameOver : function(){
    var _this = this,
        countScore = _this.score,
        countScoreElem = _this.fixedBox.getElementsByClassName("countScore")[0],
        reStarBtn = _this.fixedBox.getElementsByClassName("restarGame")[0];
    countScoreElem.innerHTML = countScore;
		function resetCountElems(){
        var elemsCountArray = this.elemsCountArray;
        for(var i = 0; i < elemsCountArray.length; i++){
          for(var j = 0; j < elemsCountArray.length; j++){
            elemsCountArray[i][j].innerHTML = '';
          }
        }
        this.firstLoad = true;
        this.searchEmptyGrids();
        this.fixedBox.className = 'gameOver'; 
				this.scoreElem.innerHTML = '0'; 
      }
		setTimeout(function(){
			_this.fixedBox.className = 'gameOver moveLeft';
			reStarBtn.addEventListener('click',resetCountElems.bind( _this ),false);
		},500);
  },

  // 判断能不能向上下左右移动
  canMove : function(){

    var curElemsArray = this.elemsCountArray,
        len = curElemsArray.length,
        booleanArr = [];
    this.canMoveRight = false;      //  不能往右移动
    this.canMoveLeft = false;       //  不能往左移动
		this.canMoveDown = false;       //	不能往下移动
		this.canMoveUp = false;         //  不能往上移动

    //检测是向右否可以移动

    /*检测还可以向右移动 canMoveRight*/
    outerRightSide :
    for(var i = 0; i < len; i++){
      outerRightOne :
      for(var j = 0; j < len-1; j++){
        switch( true ){
          case curElemsArray[i][j].innerHTML === '' :
            continue outerRightOne;
          case curElemsArray[i][j].innerHTML !== '' :
            for(var k = j; k < len -1; k++){
              if(curElemsArray[i][k+1].innerHTML === '' || curElemsArray[i][k].innerHTML === curElemsArray[i][k+1].innerHTML ){
                booleanArr[i] = true;
                continue outerRightSide;
              }
            }
            booleanArr[i] = false;
        }
      }
      booleanArr[i] = false;
    }
    for(var k = 0; k < len; k ++){
      this.canMoveRight = this.canMoveRight || booleanArr[k] ? true : false;
    }
    /*检测还可以向右移动*/

    /*检测还可以向左移动 canMoveLeft */
    outerLeftSide :
    for(var i = 0; i < len; i++){
      outerLeftOne :
      for(var j = len -1; j > 0; j--){
        switch( true ){
          case curElemsArray[i][j].innerHTML === '' :
            continue outerLeftOne;
          case curElemsArray[i][j].innerHTML !== '' :
            for(var k = j; k > 0; k--){
              if(curElemsArray[i][k-1].innerHTML === '' || curElemsArray[i][k].innerHTML === curElemsArray[i][k-1].innerHTML ){
                booleanArr[i] = true;
                continue outerLeftSide;
              }
            }
            booleanArr[i] = false;
        }
      }
      booleanArr[i] = false;
    }
    for(var k = 0; k < len; k ++){
      this.canMoveLeft = this.canMoveLeft || booleanArr[k] ? true : false;
    }

		/*检测还可以往下移动吗 canMoveLeft*/      //从下往上检测
		outerUpSide :
    for(var i = 0; i < len; i++){
      outerUpOne :
      for(var j = len - 1; j > 0; j--){
        switch( true ){
          case curElemsArray[j][i].innerHTML === '' :
            continue outerUpOne;
          case curElemsArray[j][i].innerHTML !== '' :
            for(var k = j; k > 0; k--){
              if(curElemsArray[k-1][i].innerHTML === '' || curElemsArray[k][i].innerHTML === curElemsArray[k-1][i].innerHTML ){
                booleanArr[i] = true;
                continue outerUpSide;
              }
            }
            booleanArr[i] = false;
        }
      }
      booleanArr[i] = false;
    }
    for(var k = 0; k < len; k ++){
      this.canMoveUp = this.canMoveUp || booleanArr[k] ? true : false;
    }

		/*检测还可以往下移动吗 canMoveLeft*/      //从上往下检测
		outerDownSide :
    for(var i = 0; i < len; i++){
      outerDownOne :
      for(var j = 0; j < len-1; j++){
        switch( true ){
          case curElemsArray[j][i].innerHTML === '' :
            continue outerDownOne;
          case curElemsArray[j][i].innerHTML !== '' :
            for(var k = j; k < len -1; k++){
              if(curElemsArray[k+1][i].innerHTML === '' || curElemsArray[k][i].innerHTML === curElemsArray[k+1][i].innerHTML ){
                booleanArr[i] = true;
                continue outerDownSide;
              }
            }
            booleanArr[i] = false;
        }
      }
      booleanArr[i] = false;
    }
    for(var k = 0; k < len; k ++){
      this.canMoveDown = this.canMoveDown || booleanArr[k] ? true : false;
    }
    
    if(!this.canMoveRight&&!this.canMoveLeft&&!this.canMoveUp&&!this.canMoveDown){  //游戏结束
      this.gameOver();
    }
  }
  


  
};//gameObj





window.onload = function(){
  game.init("container");
  var _this = game , 
      timer = '';
  timer = setInterval(useSwipeEvent(),200);

  function useSwipeEvent(){
    if( !_this.canPlay ){return false}
		var swipeElem = $(".rowBox");
    swipeElem.swipeLeft(function(){ _this.slideLeft(); });
    swipeElem.swipeRight(function(){ _this.slideRight(); });
    swipeElem.swipeDown(function(){ _this.slideDown(); });
    swipeElem.swipeUp(function(){ _this.slideUp(); });
    clearInterval( timer );
  }
}