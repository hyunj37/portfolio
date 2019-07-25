// JavaScript Document

  $(document).ready(function() {
    var screenSize = $(window).width();
    var current=false;
    
    if( screenSize > 768){
        $(".mobile a.virtical").show();
        $(".mobile a.horizontal").hide();
      }
    if(screenSize <= 768){
         $(".mobile a.virtical").hide();
         $(".mobile a.horizontal").show();
         $(".mobile a.horizontal").css('display', 'block');
      }
    


   $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screenSize = $(window).width(); 
      
      if( screenSize > 768 && current==false){  
        $(".mobile a.virtical").show();
        $(".mobile a.horizontal").hide();
        $(".mobile a.horizontal").css('display', 'none');
        current=true;
      }
      if(screenSize <= 768){
        $(".mobile a.virtical").hide();
        $(".mobile a.horizontal").show();
        $(".mobile a.horizontal").css('display', 'block');
        current=false;
      }
    }); 
  });
