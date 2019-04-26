import $ from 'jquery';
let move = 1;

$( ".board" ).on( "click", function(e) {
    console.log(e);

    if(e.target.className == 'col') {
        if(move%2 == 0) {
            $(e.target).addClass("black");
        } else {
            $(e.target).addClass("white");
        }
        move ++;
    }

});