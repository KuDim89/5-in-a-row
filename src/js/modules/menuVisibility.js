import $ from "jquery";

const groupBtnMenu = $("#gameMenuBtn"),
      boardText = $("#boardText"),
      timer = $("#timer"),
      gameMenuInside = $("#gameMenuInside"),
      board = $("#board"),
      countWhite = $("#countWhiteIcon"),
      countBlack = $("#countBlackIcon");

function menuActivity() {
    const localStorageArray = JSON.parse(window.localStorage.getItem('gameField'));
    timer.html("00:20");

    if(localStorageArray) {
        groupBtnMenu.addClass("hide");
        boardText.addClass("hide");
        gameMenuInside.removeClass("hide");
        return;
    }
    groupBtnMenu.removeClass("hide");
    boardText.removeClass("hide");
    gameMenuInside.addClass("hide");
    board.removeClass("hide-access");
}
menuActivity();

function showPlayingColor() {
    const gameMove = JSON.parse(window.localStorage.getItem('gameMove'));

    if (gameMove === null) {
        countWhite.removeClass("opacity");
        return;
    }
    if(gameMove %2 === 0) {
        countWhite.removeClass("opacity");
        countBlack.addClass("opacity");
    } else {
        countBlack.removeClass("opacity");
        countWhite.addClass("opacity");
    }
}
showPlayingColor();


export { menuActivity, showPlayingColor};