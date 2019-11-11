import $ from 'jquery';
import { showPlayingColor } from './menuVisibility';
import {checkDiagonal, checkHorizontalVertical} from "./checkWinner";

const board = $("#board"),
      countWhiteValue = $("#countWhiteValue"),
      countBlackValue = $("#countBlackValue");

board.on("click", ".col", function() {
    const gameMove = JSON.parse(window.localStorage.getItem('gameMove'));
    if(gameMove %2 === 0) {
        setToLocalStorageBlack();
        showPlayingColor();
    } else {
        setToLocalStorageWhite();
        showPlayingColor();
    }
    renderScore();
});


function setToLocalStorageWhite() {
    const gameMove = JSON.parse(window.localStorage.getItem('gameMove'));
    if (localStorage.getItem('white') == null) {
        localStorage.setItem('white', '1');
    } else {
        const white = JSON.parse(window.localStorage.getItem('white'));
        const newWhiteValue = gameMove + white;
        localStorage.setItem('white', newWhiteValue);
    }
}

function setToLocalStorageBlack() {
    const gameMove = JSON.parse(window.localStorage.getItem('gameMove'));
    if (localStorage.getItem('black') == null) {
        localStorage.setItem('black', gameMove);
    } else {
        const black = JSON.parse(window.localStorage.getItem('black'));
        const newBlackValue = gameMove + black;
        localStorage.setItem('black', newBlackValue);
    }
}

function renderScore () {
    const localStorageObj = JSON.parse(window.localStorage.getItem('gameField')),
          white = JSON.parse(window.localStorage.getItem('white')),
          black = JSON.parse(window.localStorage.getItem('black')),
          countWhite = countWhiteValue,
          countBlack = countBlackValue;

    if(localStorageObj) {
        checkHorizontalVertical();
        checkDiagonal ();
    }
    
    if(white === null ) {
        countWhite.html("new game");
    } else {
        countWhite.html(white);
    }

    if(black === null) {
        countBlack.html("new game");
    } else {
        countBlack.html(black);
    }

}
renderScore ();

export { renderScore }