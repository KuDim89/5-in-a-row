import $ from 'jquery';
import { createGameBoard } from './createBoardOnPage';

const board = $('.board'),
      newGame = $('.btn-default'),
      playerBlack = $('.count-black-value'),
      playerWhite = $('.count-white-value');
let  newArr = [],
     move = 0;

let idElement;

board.on("click", function(e) {
    const localStorageObj = JSON.parse(window.localStorage.getItem('gameField'));
    const domIdElement = e.target.dataset.id;
    for(let i = 0; i < localStorageObj.length; i ++ ){
        for (let j = 0; j < localStorageObj[i].length; j ++ ){
            const localStorageIdElement = localStorageObj[i][j].id;
            if (domIdElement === localStorageIdElement) {
                idElement = domIdElement;
                playerChange();
            }
        }
    }
    createGameBoard();
    gameMove();
});

function playerChange() {
    const localStorageObj = JSON.parse(window.localStorage.getItem('gameField'));
    const  gameMove = JSON.parse(window.localStorage.getItem('gameMove'));
    if(gameMove%2 === 0) {
        for(let i = 0; i < localStorageObj.length; i ++ ) {
            for (let j = 0; j < localStorageObj[i].length; j++) {
                if (localStorageObj[i][j].id === idElement) {
                    localStorageObj[i][j].value = "-";
                    newArr = localStorageObj;
                    localObj();
                }
            }
        }
    } else {
        for(let i = 0; i < localStorageObj.length; i ++ ){
            for (let j = 0; j < localStorageObj[i].length; j ++ ) {
                if (localStorageObj[i][j].id === idElement) {
                    localStorageObj[i][j].value = "+";
                    newArr = localStorageObj;
                    localObj();
                }
            }
        }
    }
    move++;
}

function gameMove() {
    if(localStorage.getItem('gameMove') == null) {
        //localStorage.setItem('gameMove', '0');
        const gameMoveSerial = JSON.stringify(move);
        localStorage.setItem('gameMove', gameMoveSerial);
    } else  {
        const gameMoveSerial = JSON.stringify(move);
        localStorage.setItem('gameMove', gameMoveSerial);
    }
}


function localObj(){
    if (localStorage.getItem('gameField') !== null) {
        const gameBoardArrSerial = JSON.stringify(newArr);
        localStorage.setItem('gameField', gameBoardArrSerial);
    }
}

newGame.on( "click", function() {
    move = 0;
    playerBlack.html(0);
    playerWhite.html(0);
});