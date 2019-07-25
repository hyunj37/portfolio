$(document).ready(function() {
   
    var position = 0;
    var wid = 1360;
    $('.inner_list').clone().appendTo('.slide_list');
    

    var slideleft = setInterval(function() {
        position -= 5;

        $('.slide_list').stop().animate({'left':position}, 'fast'); 
        if (position == -wid) {
            
            $('.slide_list').stop().css('left', 0); 
            position = 0;
        };

    }, 100);


});