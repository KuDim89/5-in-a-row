import $ from "jquery";

const groupBtnMenu = $("#gameMenuBtn"),
      boardText = $("#boardText"),
      gameMenuInside = $("#gameMenuInside");

function menuActivity() {
    let localStorageArray = JSON.parse(window.localStorage.getItem('gameField'));
    if(localStorageArray) {
        groupBtnMenu.addClass("hide");
        boardText.addClass("hide");
        gameMenuInside.removeClass("hide");
        return;
    }
    groupBtnMenu.removeClass("hide");
    boardText.removeClass("hide");
    gameMenuInside.addClass("hide");
}
menuActivity();

export { menuActivity };