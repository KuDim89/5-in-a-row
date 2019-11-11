import $ from 'jquery';

function createGameBoard (){
    let localStorageArray = JSON.parse(window.localStorage.getItem('gameField'));
    const board = $('#board');
    const rowTemplate = `<div class="row"></div>`;

    board.empty();
    if(localStorageArray) {
        for (let i = 0; i < localStorageArray.length; i++) {
            board.append(rowTemplate);
            for(let j = 0; j < localStorageArray[i].length; j++) {
                const row = $('.row:last');
                if (localStorageArray[i][j].value === "w") {
                    const colTemplate = `<div class="col white" data-id="${localStorageArray[i][j].id}"></div>`;
                    row.append(colTemplate);
                } else if (localStorageArray[i][j].value === "b") {
                    const colTemplate = `<div class="col black" data-id="${localStorageArray[i][j].id}"></div>`;
                    row.append(colTemplate);
                } else {
                    const colTemplate = `<div class="col" data-id="${localStorageArray[i][j].id}"></div>`;
                    row.append(colTemplate);
                }
            }
        }
    }
}

export { createGameBoard };