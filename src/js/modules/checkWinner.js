import { modalShow } from "./modalWindow";

function checkHorizontalVertical() {
    const localStorageObj = JSON.parse(window.localStorage.getItem('gameField')),
          blackRegexp = /b{5,}/g,
          whiteRegexp = /w{5,}/g;

    let winnerArrHorizontal = [];
    let winnerArrVertical = [];
    for (let i = 0; i < localStorageObj.length; i++) {
        winnerArrHorizontal.push(",");
        winnerArrVertical.push(",");
        for (let j = 0; j < localStorageObj[i].length; j++) {
            const idHorizontal = localStorageObj[i][j].value;
            const idVertical = localStorageObj[j][i].value;
            winnerArrHorizontal.push(idHorizontal);
            winnerArrVertical.push(idVertical);
        }
    }
    const joinToStringCheckHorizontal = winnerArrHorizontal.join("").match(blackRegexp) ||
                                        winnerArrHorizontal.join("").match(whiteRegexp);
    const joinToStringCheckVertical = winnerArrVertical.join("").match(blackRegexp) ||
                                      winnerArrVertical.join("").match(whiteRegexp);
    if(joinToStringCheckHorizontal || joinToStringCheckVertical){
        modalShow();
    }
}

function checkDiagonal () {
    const localStorageObj = JSON.parse(window.localStorage.getItem('gameField')),
          blackRegexp = /b{5,}/g,
          whiteRegexp = /w{5,}/g,
          yLength = localStorageObj.length,
          xLength = localStorageObj[0].length,
          maxLength = Math.max(xLength, yLength);

    let diagonalRightToLeftArr = [],
        diagonalLeftToRightArr = [],
        tempArrX = [],
        tempArrY = [];

    for (let i = 0; i <= 2 * (maxLength - 1); ++i) {
        for (let j = yLength - 1; j >= 0; --j) {
            const x = i - (yLength - j);
            const y = i - j;
            //right to left
            if(x >= 0 && x < xLength){
                tempArrX.push(localStorageObj[j][x].value);
            }
            //left to right
            if (y >= 0 && y < yLength) {
                tempArrY.push(localStorageObj[j][y].value);
            }
        }
        diagonalRightToLeftArr.push(tempArrX.join(""));
        diagonalLeftToRightArr.push(tempArrY.join(""));
    }

    diagonalLeftToRightArr = diagonalLeftToRightArr.join(",").match(whiteRegexp) ||
                                   diagonalLeftToRightArr.join(",").match(whiteRegexp);
    diagonalRightToLeftArr = diagonalRightToLeftArr.join(",").match(whiteRegexp) ||
                                   diagonalRightToLeftArr.join(",").match(blackRegexp);

    if(diagonalLeftToRightArr || diagonalRightToLeftArr) {
        modalShow();
    }
}

export { checkHorizontalVertical, checkDiagonal };

