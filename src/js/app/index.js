define(['jquery', 'app/mover'], function ($, mover) {
    var init = function () {

    };
    
    mover.move($('.main-container'), $('.bg-img'), 50);
    //mover.move($('.main-container'), $('.title'), 10);
    return { init: init };
});