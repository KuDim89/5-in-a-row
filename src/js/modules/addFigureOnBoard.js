import $ from 'jquery';
import { createGameBoard } from './createBoardOnPage';
import { timer, changeCount} from "./timerOnPage";

const board = $('.board');


let  newArr = [],
     idElement;

board.on("click", ".col", function(e){
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
    changeCount(20);
    timer();
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
}

function gameMove() {
    if(localStorage.getItem('gameMove') === null) {
        localStorage.setItem('gameMove', '1');
    } else  {
        const gameMoveParse =  JSON.parse(localStorage.getItem("gameMove"));
        const gameMoveParseUpdate = gameMoveParse + 1;
        localStorage.setItem('gameMove', gameMoveParseUpdate);
    }
}


function localObj(){
    if (localStorage.getItem('gameField') !== null) {
        const gameBoardArrSerial = JSON.stringify(newArr);
        localStorage.setItem('gameField', gameBoardArrSerial);
    }
}
