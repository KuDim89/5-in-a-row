import $ from 'jquery';

$( ".btn-menu" ).on( "click", function() {
    const btnValue = $(this).attr('data-value');
    const board = $('.board');

    localStorage.clear();
    board.empty();
    for (let i = 0; i < btnValue; i++){
        board.append('<div class="row"></div>');
        const row = $('.row:last');
        for (let j = 0; j < btnValue; j++) {
            row.append('<div class="col"></div>');
        }
    }
});