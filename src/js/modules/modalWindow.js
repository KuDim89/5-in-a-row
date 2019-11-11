import $ from 'jquery';

const modalWinner = $("#modalWinner"),
      modalWinnerText =  $("#modalWinnerText"),
      gameMenuTimerFigure =  $("#gameMenuTimer figure"),
      modalWinnerImg = $("#modalWinnerImg img"),
      timer =  $("#timer"),
      close =  $("#close"),
      board = $("#board");

const winnerStatus = {
    black : {
        text: "the dark side won",
        src: "assets/img/black.png"
    },
    white : {
        text: "the bright side won",
        src: "assets/img/white.png"
    },
    draw: {
        text: "are you playing",
        src: "assets/img/logo.png"
    }
};


close.on("click", () => {
    modalWinner.removeClass("show");
});

function modalShow() {
    const localStorageBlack = +localStorage.getItem("black"),
          localStorageWhite = +localStorage.getItem("white");

    gameMenuTimerFigure.addClass("opacity");
    if( localStorageWhite > localStorageBlack){
        contentInModal(winnerStatus.white);
    } else if (localStorageWhite < localStorageBlack){
        contentInModal(winnerStatus.black);
    } else {
        contentInModal(winnerStatus.draw);
        board.removeClass("hide-access");
    }
}

function contentInModal(winnerStatus) {
    timer.html("00:00");
    modalWinnerText.html(winnerStatus.text);
    modalWinnerImg.attr("src", winnerStatus.src);
    modalWinner.addClass("show");
    board.addClass("hide-access");
}

function gameInterrupted() {
    const localStorageObj = JSON.parse(window.localStorage.getItem('gameField'));

    if(localStorageObj) {
        //debugger;
        //timer.html("00:00");
        modalShow();
    }
}
gameInterrupted();

export { modalShow }


