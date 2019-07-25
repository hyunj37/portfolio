$(document).ready(function(){
    $(window).scroll(function(){
        
        //오른쪽방향
        $('.SlideToRight').each(function(i){
            var element_bottom = $(this).offset().top + $(this).outerHeight();
            var window_bottom = $(window).scrollTop() + $(window).height();
            var screenSize = $(window).width();
            
            if(window_bottom > element_bottom){
                 $(this).animate({'opacity':'1','margin-left':'0'},500);
            }
        });
        
        //왼쪽방향
        $('.SlideToLeft').each(function(i){
            var element_bottom = $(this).offset().top + $(this).outerHeight();
            var window_bottom = $(window).scrollTop() + $(window).height();
            //var screenSize = $(window).width();
            
            if(window_bottom > element_bottom){
                $(this).animate({'opacity':'1','margin-right':'0'},500);
            }
            
            /*
            $(window).resize(function(){
                var opacity = $(this).css('opacity');
                if(opacity==1 && screenSize>640){
                   $(this).animate({'margin-right':'0'},500);
                }
                if(opacity==1 && screenSize<=640){
                    $(this).animate({'left':'50%','margin-left':-$(this).width()/2},500);
                }
                
            });
            */
        });
        
        
    });
});