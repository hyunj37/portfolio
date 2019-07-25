// JavaScript Document

  $(document).ready(function() {
    var screenSize = $(window).width();
    var current=false;
    
    if( screenSize > 1007){
        $("#videoBG").show();
        $("#imgBG").hide();
        current=true;
      }
    if(screenSize <= 1007){
        $("#videoBG").hide();
        $("#videoBG source").attr('src','');
        $("#imgBG").show();
      }
    
   $(window).resize(function(){    
      screenSize = $(window).width(); 
      
      if( screenSize > 1007 && current==false){ 
        $("#videoBG").show();
        $("#videoBG source").attr('src','video/Rewards.mp4');
        $("#imgBG").hide();
        current=true;
      }
      if(screenSize <= 1007){
        $("#videoBG").hide();
        $("#videoBG source").attr('src','');
        $("#imgBG").show();
        current=false;
      }
    }); 
  });
