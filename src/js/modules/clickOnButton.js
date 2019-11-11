import $ from "jquery";
import { createGameBoard } from "./createBoardOnPage";
import { createLocalStorageObj, sourceLocalStorageObject } from "./createSourceLocallStorageObj";
import { menuActivity } from "./menuVisibility";
import { clearTimer } from "./timerOnPage";
import { showPlayingColor } from "./menuVisibility";


const newGame = $('#btnDefault'),
      playerBlack = $('#countBlackValue'),
      playerWhite = $('#countWhiteValue'),
      board = $("#board"),
      img = $('.game-img img'),
      btnMenu = $('.btn-menu');


btnMenu.on( "click", function() {
    const fieldDimension = $(this).attr('data-value');
    createLocalStorageObj(fieldDimension);
    sourceLocalStorageObject();
    createGameBoard();
    menuActivity();
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
    img.attr('src',"assets/img/logo.png");
    board.removeClass("hide-access");
    clearTimer();
    showPlayingColor();
});

