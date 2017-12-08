var game = {
    elemsCountArray: [],
    canPlay: false,
    firstLoad: true,
    gridNum: Number(window.sessionStorage.getItem('game2048Grids')) || 4,
    score: 0,
    init: function(id) {
        this.contian = document.getElementById(id);
        this.createElems();
        this.scoreElem = this.contian.getElementsByClassName("detailScore")[0]
    },
    createElems: function() {
        this.gridClassName = 'grid' + this.gridNum;
        var rowBox = document.createElement("div");
        rowBox.className = "rowBox";
        for (var i = 0; i < this.gridNum; i++) {
            var rowGrid = document.createElement("div");
            rowGrid.className = "rowGrid";
            for (var j = 0, gridArr = []; j < this.gridNum; j++) {
                var grid = document.createElement("div");
                grid.className = this.gridClassName;
                gridArr.push(grid);
                rowGrid.appendChild(grid)
            }
            this.elemsCountArray.push(gridArr);
            rowBox.appendChild(rowGrid)
        }
        var topScoreElem = document.createElement("div"),
            sideSpanElem = document.createElement('span');
        topScoreElem.className = 'score';
        topScoreElem.innerHTML = '得分 : ';
        sideSpanElem.innerHTML = '0';
        sideSpanElem.className = 'detailScore';
        topScoreElem.appendChild(sideSpanElem);
        this.contian.appendChild(topScoreElem);
        this.contian.appendChild(rowBox);
        this.ElemStyle();
        this.searchEmptyGrids()
    },
    ElemStyle: function() {
        var elems = this.contian.getElementsByClassName(this.gridClassName),
            winH = window.innerHeight;
        this.contian.style.height = winH + "px";
        this.fixedBox = document.getElementsByClassName("gameOver")[0];
        this.fixedBox.style.lineHeight = winH + "px"
    },
    searchEmptyGrids: function() {
        var emptyGrids = [],
            elemsArr = this.elemsCountArray;
        for (var i = 0; i < elemsArr.length; i++) {
            for (var j = 0; j < elemsArr.length; j++) {
                elemsArr[i][j].innerHTML === '' ? emptyGrids.push(elemsArr[i][j]) : 0
            }
        }
        var canAddNum = emptyGrids.length != 0 ? 1 : 0;
        if (canAddNum = this.firstLoad ? 2 : canAddNum) {
            for (var t = 0; t < canAddNum; t++) {
                var n = Math.floor(Math.random() * emptyGrids.length);
                Math.random() > 0.5 ? emptyGrids[n].innerHTML = 2 : emptyGrids[n].innerHTML = 4;
                emptyGrids.splice(n, 1)
            }
            this.firstLoad = false;
            this.againGetCountArray();
            this.canMove();
            this.canPlay = true
        }
    },
    againGetCountArray: function() {
        var rows = this.contian.getElementsByClassName("rowBox");
        for (var i = 0; i < rows.length; i++) {
            for (var j = 0; j < rows.length; j++) {
                this.elemsCountArray[i][j] = rows[i].getElementsByClassName(this.gridClassName)[j]
            }
        }
        for (var n = 0; n < this.elemsCountArray.length; n++) {
            for (var k = 0; k < this.elemsCountArray.length; k++) {
                var numHowLarge = Number(this.elemsCountArray[n][k].innerHTML);
                if (numHowLarge < 128) {
                    this.elemsCountArray[n][k].style.background = ''
                }
                if (numHowLarge >= 128 && numHowLarge <= 512) {
                    this.elemsCountArray[n][k].style.background = 'rgba(250,230,185,0.4)'
                }
                if (numHowLarge > 512 && numHowLarge <= 2048) {
                    this.elemsCountArray[n][k].style.background = 'rgba(250,160,90,0.4)'
                }
                if (numHowLarge > 2048 && numHowLarge <= 8192) {
                    this.elemsCountArray[n][k].style.background = 'rgba(250,110,90,0.4)'
                }
                if (numHowLarge > 8192) {
                    this.elemsCountArray[n][k].style.background = 'rgba(255,40,0,0.4)';
                    this.elemsCountArray[n][k].style.fontSize = '14px'
                }
            }
        }
    },
    computeScore: function(obj) {
        var thisElem = this.scoreElem,
            onceScore = Number(obj.innerHTML),
            countScore = Number(thisElem.innerHTML);
        this.score = countScore + onceScore;
        thisElem.innerHTML = this.score
    },
    slideLeft: function() {
        if (this.canPlay && this.canMoveLeft) {
            this.canPlay = false
        } else {
            return false
        }
        var stepAndNum = 0,
            curElemsArray = this.elemsCountArray,
            len = curElemsArray.length;
        for (var i = 0; i < len; i++) {
            outerOne: for (var j = 0; j < len; j++) {
                stepAndNum = Number(curElemsArray[i][j].innerHTML);
                outerZero: for (var k = j; k < len - 1; k++) {
                    var nextTxtIsNum = Number(curElemsArray[i][k + 1].innerHTML);
                    switch (true) {
                        case !nextTxtIsNum:
                            continue outerZero;
                        case nextTxtIsNum !== stepAndNum:
                            continue outerOne;
                        case nextTxtIsNum === stepAndNum:
                            curElemsArray[i][j].innerHTML = 2 * Number(curElemsArray[i][j].innerHTML);
                            curElemsArray[i][k + 1].innerHTML = '';
                            this.computeScore(curElemsArray[i][j]);
                            continue outerOne
                    }
                }
            }
        }
        for (var i = 0; i < len; i++) {
            gridTxtMoveleft: for (var d = 0; d < len; d++) {
                if (curElemsArray[i][d].innerHTML === '') {
                    stepAndNum = d;
                    for (var n = d + 1; n < len; n++) {
                        if (curElemsArray[i][n].innerHTML !== '') {
                            curElemsArray[i][stepAndNum].innerHTML = curElemsArray[i][n].innerHTML;
                            curElemsArray[i][n].innerHTML = '';
                            continue gridTxtMoveleft
                        }
                    }
                }
            }
        }
        this.againGetCountArray();
        this.searchEmptyGrids()
    },
    slideRight: function() {
        if (this.canPlay && this.canMoveRight) {
            this.canPlay = false
        } else {
            return false
        }
        var stepAndNum = 0,
            curElemsArray = this.elemsCountArray,
            len = curElemsArray.length;
        for (var i = 0; i < len; i++) {
            outerOne: for (var j = len - 1; j > 0; j--) {
                stepAndNum = Number(curElemsArray[i][j].innerHTML);
                outerZero: for (var n = j; n > 0; n--) {
                    var prevTxtIsNum = Number(curElemsArray[i][n - 1].innerHTML);
                    switch (true) {
                        case !prevTxtIsNum:
                            continue outerZero;
                        case prevTxtIsNum !== stepAndNum:
                            continue outerOne;
                        case prevTxtIsNum === stepAndNum:
                            curElemsArray[i][j].innerHTML = 2 * Number(curElemsArray[i][n - 1].innerHTML);
                            curElemsArray[i][n - 1].innerHTML = '';
                            this.computeScore(curElemsArray[i][j]);
                            continue outerOne
                    }
                }
            }
        }
        for (var i = 0; i < len; i++) {
            gridTxtMoveleft: for (var d = len - 1; d > 0; d--) {
                if (curElemsArray[i][d].innerHTML === '') {
                    stepAndNum = d;
                    for (var n = d; n > 0; n--) {
                        if (curElemsArray[i][n - 1].innerHTML !== '') {
                            curElemsArray[i][stepAndNum].innerHTML = curElemsArray[i][n - 1].innerHTML;
                            curElemsArray[i][n - 1].innerHTML = '';
                            continue gridTxtMoveleft
                        }
                    }
                }
            }
        }
        this.againGetCountArray();
        this.searchEmptyGrids()
    },
    slideUp: function() {
        if (this.canPlay && this.canMoveUp) {
            this.canPlay = false
        } else {
            return false
        }
        var stepAndNum = 0,
            curElemsArray = this.elemsCountArray,
            len = curElemsArray.length;
        for (var i = 0; i < len; i++) {
            outerOne: for (var j = 0; j < len; j++) {
                stepAndNum = Number(curElemsArray[j][i].innerHTML);
                outerZero: for (var k = j; k < len - 1; k++) {
                    var upTxtIsNum = Number(curElemsArray[k + 1][i].innerHTML);
                    switch (true) {
                        case !stepAndNum || ((upTxtIsNum !== 0) && (stepAndNum !== upTxtIsNum)):
                            continue outerOne;
                        case stepAndNum && upTxtIsNum === 0:
                            continue outerZero;
                        case stepAndNum === upTxtIsNum:
                            curElemsArray[j][i].innerHTML = 2 * Number(curElemsArray[k + 1][i].innerHTML);
                            curElemsArray[k + 1][i].innerHTML = '';
                            this.computeScore(curElemsArray[j][i]);
                            continue outerOne
                    }
                }
            }
        }
        for (var i = 0; i < len; i++) {
            gridTxtMoveUp: for (var j = 0; j < len; j++) {
                if (curElemsArray[j][i].innerHTML === '') {
                    for (var d = j; d < len - 1; d++) {
                        if (curElemsArray[d + 1][i].innerHTML !== '') {
                            curElemsArray[j][i].innerHTML = curElemsArray[d + 1][i].innerHTML;
                            curElemsArray[d + 1][i].innerHTML = '';
                            continue gridTxtMoveUp
                        }
                    }
                }
            }
        }
        this.againGetCountArray();
        this.searchEmptyGrids()
    },
    slideDown: function() {
        console.log(this);
        if (this.canPlay && this.canMoveDown) {
            this.canPlay = false
        } else {
            return false
        }
        var stepAndNum = 0,
            curElemsArray = this.elemsCountArray,
            len = curElemsArray.length;
        for (var i = 0; i < len; i++) {
            outerOne: for (var j = len - 1; j > 0; j--) {
                stepAndNum = Number(curElemsArray[j][i].innerHTML);
                outerZero: for (var k = j; k > 0; k--) {
                    var upTxtIsNum = Number(curElemsArray[k - 1][i].innerHTML);
                    switch (true) {
                        case !stepAndNum || ((upTxtIsNum !== 0) && (stepAndNum !== upTxtIsNum)):
                            continue outerOne;
                        case stepAndNum && upTxtIsNum === 0:
                            continue outerZero;
                        case stepAndNum === upTxtIsNum:
                            curElemsArray[j][i].innerHTML = 2 * Number(curElemsArray[k - 1][i].innerHTML);
                            curElemsArray[k - 1][i].innerHTML = '';
                            this.computeScore(curElemsArray[j][i]);
                            continue outerOne
                    }
                }
            }
        }
        for (var i = 0; i < len; i++) {
            gridTxtMoveDown: for (var j = len - 1; j > 0; j--) {
                if (curElemsArray[j][i].innerHTML === '') {
                    for (var d = j; d > 0; d--) {
                        if (curElemsArray[d - 1][i].innerHTML !== '') {
                            curElemsArray[j][i].innerHTML = curElemsArray[d - 1][i].innerHTML;
                            curElemsArray[d - 1][i].innerHTML = '';
                            continue gridTxtMoveDown
                        }
                    }
                }
            }
        }
        this.againGetCountArray();
        this.searchEmptyGrids()
    },
    gameOver: function() {
        var _this = this,
            countScore = _this.score,
            countScoreElem = _this.fixedBox.getElementsByClassName("countScore")[0],
            reStarBtn = _this.fixedBox.getElementsByClassName("restarGame")[0];
        countScoreElem.innerHTML = countScore;

        function resetCountElems() {
            var elemsCountArray = this.elemsCountArray;
            for (var i = 0; i < elemsCountArray.length; i++) {
                for (var j = 0; j < elemsCountArray.length; j++) {
                    elemsCountArray[i][j].innerHTML = ''
                }
            }
            this.firstLoad = true;
            this.searchEmptyGrids();
            this.fixedBox.className = 'gameOver';
            this.scoreElem.innerHTML = '0'
        }
        setTimeout(function() {
            _this.fixedBox.className = 'gameOver moveLeft';
            reStarBtn.addEventListener('click', resetCountElems.bind(_this), false)
        }, 500)
    },
    canMove: function() {
        var curElemsArray = this.elemsCountArray,
            len = curElemsArray.length,
            booleanArr = [];
        this.canMoveRight = false;
        this.canMoveLeft = false;
        this.canMoveDown = false;
        this.canMoveUp = false;
        outerRightSide: for (var i = 0; i < len; i++) {
            outerRightOne: for (var j = 0; j < len - 1; j++) {
                switch (true) {
                    case curElemsArray[i][j].innerHTML === '':
                        continue outerRightOne;
                    case curElemsArray[i][j].innerHTML !== '':
                        for (var k = j; k < len - 1; k++) {
                            if (curElemsArray[i][k + 1].innerHTML === '' || curElemsArray[i][k].innerHTML === curElemsArray[i][k + 1].innerHTML) {
                                booleanArr[i] = true;
                                continue outerRightSide
                            }
                        }
                        booleanArr[i] = false
                }
            }
            booleanArr[i] = false
        }
        for (var k = 0; k < len; k++) {
            this.canMoveRight = this.canMoveRight || booleanArr[k] ? true : false
        }
        outerLeftSide: for (var i = 0; i < len; i++) {
            outerLeftOne: for (var j = len - 1; j > 0; j--) {
                switch (true) {
                    case curElemsArray[i][j].innerHTML === '':
                        continue outerLeftOne;
                    case curElemsArray[i][j].innerHTML !== '':
                        for (var k = j; k > 0; k--) {
                            if (curElemsArray[i][k - 1].innerHTML === '' || curElemsArray[i][k].innerHTML === curElemsArray[i][k - 1].innerHTML) {
                                booleanArr[i] = true;
                                continue outerLeftSide
                            }
                        }
                        booleanArr[i] = false
                }
            }
            booleanArr[i] = false
        }
        for (var k = 0; k < len; k++) {
            this.canMoveLeft = this.canMoveLeft || booleanArr[k] ? true : false
        }
        outerUpSide: for (var i = 0; i < len; i++) {
            outerUpOne: for (var j = len - 1; j > 0; j--) {
                switch (true) {
                    case curElemsArray[j][i].innerHTML === '':
                        continue outerUpOne;
                    case curElemsArray[j][i].innerHTML !== '':
                        for (var k = j; k > 0; k--) {
                            if (curElemsArray[k - 1][i].innerHTML === '' || curElemsArray[k][i].innerHTML === curElemsArray[k - 1][i].innerHTML) {
                                booleanArr[i] = true;
                                continue outerUpSide
                            }
                        }
                        booleanArr[i] = false
                }
            }
            booleanArr[i] = false
        }
        for (var k = 0; k < len; k++) {
            this.canMoveUp = this.canMoveUp || booleanArr[k] ? true : false
        }
        outerDownSide: for (var i = 0; i < len; i++) {
            outerDownOne: for (var j = 0; j < len - 1; j++) {
                switch (true) {
                    case curElemsArray[j][i].innerHTML === '':
                        continue outerDownOne;
                    case curElemsArray[j][i].innerHTML !== '':
                        for (var k = j; k < len - 1; k++) {
                            if (curElemsArray[k + 1][i].innerHTML === '' || curElemsArray[k][i].innerHTML === curElemsArray[k + 1][i].innerHTML) {
                                booleanArr[i] = true;
                                continue outerDownSide
                            }
                        }
                        booleanArr[i] = false
                }
            }
            booleanArr[i] = false
        }
        for (var k = 0; k < len; k++) {
            this.canMoveDown = this.canMoveDown || booleanArr[k] ? true : false
        }
        if (!this.canMoveRight && !this.canMoveLeft && !this.canMoveUp && !this.canMoveDown) {
            this.gameOver()
        }
    }
};
window.onload = function() {
    game.init("container");
    var _this = game,
        timer = '';
    timer = setInterval(useSwipeEvent(), 200);

    function useSwipeEvent() {
        if (!_this.canPlay) {
            return false
        }
        var swipeElem = $(".rowBox");
        swipeElem.swipeLeft(function() {
            _this.slideLeft()
        });
        swipeElem.swipeRight(function() {
            _this.slideRight()
        });
        swipeElem.swipeDown(function() {
            _this.slideDown()
        });
        swipeElem.swipeUp(function() {
            _this.slideUp()
        });
        clearInterval(timer)
    }
}