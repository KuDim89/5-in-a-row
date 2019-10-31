import $ from "jquery";
import {createGameBoard} from "./createBoardOnPage";
import {createLocalStorageObj, sourceLocalStorageObject} from "./createSourceLocallStorageObj";
import {menuActivity} from "./menuVisibility"
import { timer, changeCount } from "./timerOnPage";


const btnMenu = $('.btn-menu'),
      newGame = $('#btnDefault'),
      playerBlack = $('#countBlackValue'),
      playerWhite = $('#countWhiteValue');

btnMenu.on( "click", function() {
    const fieldDimension = $(this).attr('data-value');
    createLocalStorageObj(fieldDimension);
    sourceLocalStorageObject();
    createGameBoard();
    menuActivity();
    changeCount(20);
    timer();
});


newGame.on( "click", function() {
    let fieldDimension;
    createLocalStorageObj(fieldDimension);
    sourceLocalStorageObject();
    localStorage.clear();
    createGameBoard();
    menuActivity();
    playerBlack.html("new game");
    playerWhite.html("new game");
});

