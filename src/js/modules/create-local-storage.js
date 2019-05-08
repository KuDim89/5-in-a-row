import $ from "jquery";

const gameBoardArr = [];

$( ".board" ).on( "click", function() {
    createArrayFieldGames();
    createLocalStorageObject();
    gameBoardUpdate();
});


function createArrayFieldGames() {
    const row = $('.row');

    for (let i = 0; i < row.length; i++ ){
         gameBoardArr[i] = [];

        const colArr =  row[i].querySelectorAll('.col');
         for (let j = 0; j < colArr.length; j++) {
             const colElement = colArr[j].className;
             if(colElement === "col white") {
                 console.log(5);
                 gameBoardArr[i][j] = '-';
             } else if (colElement === "col black"){
                 gameBoardArr[i][j] = '+';
             } else {
                 gameBoardArr[i][j] = '';
             }
        }
    }
}

function createLocalStorageObject() {
    if (localStorage.getItem('gameField') == null) {
        localStorage.setItem('gameField', '[]');
        const gameBoardArrSerial = JSON.stringify(gameBoardArr);
        localStorage.setItem('gameField', gameBoardArrSerial);
    }else {
        const gameBoardArrSerial = JSON.stringify(gameBoardArr);
        localStorage.setItem('gameField', gameBoardArrSerial);
    }
}

/*function gameBoardUpdate (){
    //console.log('storage', localStorage.gameField);
    let localTasks = JSON.parse(window.localStorage.getItem('gameField'));
    //console.log('tack', localTasks);
    for (let i = 0; i < localTasks.length; i++) {
        //console.log('local I', localTasks[i]);
        for(let j = 0; j < localTasks[i].length; j++) {
            if(localTasks[i][j] === '-') {


                // const row = $('.row');
                // for (let i = 0; i < row.length; i++){
                //     const col = row[i].querySelectorAll('.col');
                //     console.log('col', col.length);
                // }
            }else if (localTasks[i][j] === '+') {

            } else {

            }
        }
    }
}*/


