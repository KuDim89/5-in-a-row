import $ from "jquery";
import {createGameBoard} from "./createBoardOnPage";
import {createLocalStorageObj, sourceLocalStorageObject} from "./createSourceLocallStorageObj";


const btnMenu = $('.btn-menu'),
      newGame = $('.btn-default');


btnMenu.on( "click", function() {
    const fieldDimension = $(this).attr('data-value');
    createLocalStorageObj(fieldDimension);
    sourceLocalStorageObject();
    createGameBoard();
});


newGame.on( "click", function() {
    let fieldDimension;
    localStorage.clear();
    createLocalStorageObj(fieldDimension);
    sourceLocalStorageObject();
    createGameBoard();

});