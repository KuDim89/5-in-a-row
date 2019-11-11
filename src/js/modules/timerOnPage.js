import $ from 'jquery';
import { modalShow } from "./modalWindow";

const timerId = $("#timer");

let counter,
    count = 20;


function runSetInterval() {
    clearInterval(counter);
    counter = setInterval(timer, 1000);
}

function timer() {
    count = count - 1;
    if (count < 0) {
        modalShow();
        clearInterval(counter);
        return;
    }

    timerId.html("00:" + count);
}

function changeCount(newCount) {
    count = newCount;
}

function clearTimer() {
    clearInterval(counter);
    count = 20;
}

export { runSetInterval, changeCount, clearTimer };
