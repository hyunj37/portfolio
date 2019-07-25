
$(document).ready(function() {
   $(".btn").toggle(function() {
	 $(".menu").fadeIn('slow');
   }, function() {
	 $(".menu").fadeOut('fast');
   });
    
   
   //화면 늘리거나 줄일때 생기는 문제 해결
    var current=0; //열린상태
   $(window).resize(function(){ 
      var screenSize = $(window).width(); 
      if( screenSize > 1024){ // 1024이하에서 닫기버튼 눌러서 닫았을때 1024이상 늘릴때는 메뉴가 보여야하므로
        $(".menu").show();
		 current=1;
      }
      if(current==1 && screenSize < 1024){ // 닫힌상태에서 1024 보다 작아질때만. / 열린상태에서 작아지면 열린상태유지
          //current=1은 위에 닫힌상태에서 1024이상 늘렸을때 강제 show한 상태
        $(".menu").hide();
      }
         
    }); 

});
