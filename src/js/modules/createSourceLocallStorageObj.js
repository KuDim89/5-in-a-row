import $ from 'jquery';
import { createGameBoard } from './createBoardOnPage';


let gameBoardArr = [];
const btnMenu = $('.btn-menu');


function isLocalStorage (){
    if("gameField" in localStorage){
        createGameBoard ();
    }
}
isLocalStorage();


function createLocalStorageObj(fieldDimension) {
    for (let i = 0; i < fieldDimension; i++) {
        gameBoardArr[i] = [];
        for (let j = 0; j < fieldDimension; j++) {
            gameBoardArr[i][j] = {
                id: getRandomID(0, 1679615),
                value: ""
            };
        }
    }
}


function sourceLocalStorageObject() {
    if(localStorage.getItem('gameField') == null) {
        localStorage.setItem('gameField', '[]');
        const gameBoardArrSerial = JSON.stringify(gameBoardArr);
        localStorage.setItem('gameField', gameBoardArrSerial);
    } else  {
        const gameBoardArrSerial = JSON.stringify(gameBoardArr);
        localStorage.setItem('gameField', gameBoardArrSerial);
    }
}


/*function getRandomId() {
    return (new Date()).getMilliseconds()+Math.floor(Math.random()*1000);
}*/


function getRandomID(min, max) {
    var int = Math.floor(Math.random() * (max - min + 1)) + min;
    return int.toString(36);
}


btnMenu.on( "click", function() {
    const btnValue = $(this).attr('data-value');
    const fieldDimension = btnValue;
    gameBoardArr = [];
    createLocalStorageObj(fieldDimension);
    sourceLocalStorageObject();
    createGameBoard ();
});



export { sourceLocalStorageObject, createLocalStorageObj};