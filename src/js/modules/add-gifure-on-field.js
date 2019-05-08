import $ from 'jquery';
let move = 1;

$( ".board" ).on( "click", function(e) {

    if(e.target.className === 'col') {
        if(move%2 === 0) {
            $(e.target).addClass("black");
        } else {
            $(e.target).addClass("white");
        }
        move ++;
    }

});

$( ".btn-menu" ).on( "click", function() {
     move = 1;
});

$( ".btn-default" ).on( "click", function() {
    localStorage.clear();
    const col = $('.col');
    
    col.removeClass(['white','black']);
});