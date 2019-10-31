import $ from 'jquery';

let count = 20;
let counter = setInterval(timer, 1000);

function changeCount(newCount) {
    count = newCount;

}

function timer() {

    count = count - 1;
    if (count < 0) {
        clearInterval(counter);
        //counter ended, do something here
        return;
    }
    $("#timer").html("00:" + count);

}

export { timer, changeCount};
