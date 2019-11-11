import $ from "jquery";

const imgArray =  [
   "assets/img/imgShadow/sticker.png",
    "assets/img/imgShadow/sticker1.png",
    "assets/img/imgShadow/sticker2.png",
    "assets/img/imgShadow/sticker3.png",
    "assets/img/imgShadow/sticker4.png",
    "assets/img/imgShadow/sticker5.png",
    "assets/img/imgShadow/sticker6.png",
    "assets/img/imgShadow/sticker7.png"
    ],
    img = $('.game-img img');


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function moveSticker() {
    let imgNumber = getRandomIntInclusive(0, imgArray.length-1);
    let currentImg = imgArray[imgNumber];
    const check = img.attr("src") === imgArray[imgNumber];
    if(check) {
        imgNumber = getRandomIntInclusive(0, imgArray.length-1);
        currentImg = imgArray[imgNumber];
        return currentImg;
    }
   return currentImg;
}


function imgWriteToLocalStorage() {
    const imgSrc = moveSticker();
    if(localStorage.getItem('imgShow') == null) {
        const imgSrcSerial = JSON.stringify(imgSrc);
        localStorage.setItem('imgShow', imgSrcSerial);
    } else  {
        const imgSrcSerial = JSON.stringify(imgSrc);
        localStorage.setItem('imgShow', imgSrcSerial);
    }
}

function renderImg() {
    const imgShow = JSON.parse(window.localStorage.getItem('imgShow'));
    img.attr('src', imgShow);
}

function showNewImage() {
    imgWriteToLocalStorage();
    renderImg();
}

function showImg() {
    const imgShow = JSON.parse(window.localStorage.getItem('imgShow'));
    if(imgShow) {
        renderImg();
    } else {
        imgWriteToLocalStorage();
        renderImg()
    }
}

function gameInterruptImage() {
    const localStorageObj = JSON.parse(window.localStorage.getItem('gameField'));
    img.attr("src", "assets/img/logo.png");
    if (localStorageObj) {
        showImg();
    }
}
gameInterruptImage();


export { showNewImage }
