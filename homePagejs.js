$(document).ready(function(){
  let prevBtnNode=$("#prevbtn");
  let nextBtnNode=$("#nextbtn");
  let slideNo=1
  let slideId="#slide"+slideNo
  nextBtnNode.click(function(){ 
    if (slideNo<3) {
      slideId1="#slide"+(slideNo)
      slideNo=slideNo+1
      slideId2="#slide"+slideNo
      $(slideId1).css("display","none")
      $(slideId2).css("display","block")
    }
    
    else{
      slideNo=3
      slideId1="#slide"+(slideNo)
      slideNo=0+1
      slideId2="#slide"+slideNo
      $(slideId1).css("display","none")
      $(slideId2).css("display","block")
    }
  });
  prevBtnNode.click(function(){ 
      if (slideNo>1) {
        slideId1="#slide"+(slideNo)
        slideNo=slideNo-1
        
        slideId2="#slide"+slideNo
        $(slideId1).css("display","none")
        $(slideId2).css("display","block")
      }
      else {
        slideNo=1
        slideId1="#slide"+(slideNo)
        slideNo=4-1
        slideId2="#slide"+slideNo
        $(slideId1).css("display","none")
        $(slideId2).css("display","block")
      }
  });

  
  $("#popCont1").hover(function(){
    $("#popCont1").css("background-color", "gray");
  },function(){
    $("#popCont1").css("background-color", "white");
    $("#popCont1").css("box-shadow", "");
  });
  $("#popCont2").hover(function(){
    $("#popCont2").css("background-color", "gray");
  },function(){
    $("#popCont2").css("background-color", "white");
    $("#popCont2").css("box-shadow", "");
  });
  $("#popCont3").hover(function(){
    $("#popCont3").css("background-color", "gray");
  },function(){
    $("#popCont3").css("background-color", "white");
    $("#popCont3").css("box-shadow", "");
  });
  $("#popCont4").hover(function(){
    $("#popCont4").css("background-color", "gray");
  },function(){
    $("#popCont4").css("background-color", "white");
    $("#popCont4").css("box-shadow", "");
  });
/*---------------------------------------------------------------*/
  $("#imgCont1").hover(function(){
    $("#imgCont1").css("background-color", "gray");
    $("#imgCont1").css("box-shadow", "5px 10px 20px white");
    $("#imgCont1").css("border", "1px solid black");
  },function(){
    $("#imgCont1").css("background-color", "white");
    $("#imgCont1").css("box-shadow", "5px 10px 20px #888888");
    $("#imgCont1").css("border", "2px solid black");
  });
  $("#imgCont2").hover(function(){
    $("#imgCont2").css("background-color", "gray");
    $("#imgCont2").css("box-shadow", "5px 10px 20px white");
    $("#imgCont2").css("border", "1px solid black");
  },function(){
    $("#imgCont2").css("background-color", "white");
    $("#imgCont2").css("box-shadow", "5px 10px 20px #888888");
    $("#imgCont2").css("border", "2px solid black");
  });
  $("#imgCont3").hover(function(){
    $("#imgCont3").css("background-color", "gray");
    $("#imgCont3").css("box-shadow", "5px 10px 20px white");
    $("#imgCont3").css("border", "1px solid black");
  },function(){
    $("#imgCont3").css("background-color", "white");
    $("#imgCont3").css("box-shadow", "5px 10px 20px #888888");
    $("#imgCont3").css("border", "2px solid black");
  });
  $("#imgCont4").hover(function(){
    $("#imgCont4").css("background-color", "gray");
    $("#imgCont4").css("box-shadow", "5px 10px 20px white");
    $("#imgCont4").css("border", "1px solid black");
  },function(){
    $("#imgCont4").css("background-color", "white");
    $("#imgCont4").css("box-shadow", "5px 10px 20px #888888");
    $("#imgCont4").css("border", "2px solid black");
  });
  /*---------------------------------------------------------------*/
  $("#vidCont1").hover(function(){
    $("#vidCont1").css("background-color", "gray");
    $("#vidCont1").css("box-shadow", "5px 10px 20px white");
    $("#vidCont1").css("border", "1px solid black");
  },function(){
    $("#vidCont1").css("background-color", "white");
    $("#vidCont1").css("box-shadow", "5px 10px 20px #888888");
    $("#vidCont1").css("border", "0px solid white");
  });
  $("#vidCont2").hover(function(){
    $("#vidCont2").css("background-color", "gray");
    $("#vidCont2").css("box-shadow", "5px 10px 20px white");
    $("#vidCont2").css("border", "1px solid black");
  },function(){
    $("#vidCont2").css("background-color", "white");
    $("#vidCont2").css("box-shadow", "5px 10px 20px #888888");
    $("#vidCont2").css("border", "0px solid white");
  });
  $("#vidCont3").hover(function(){
    $("#vidCont3").css("background-color", "gray");
    $("#vidCont3").css("box-shadow", "5px 10px 20px white");
    $("#vidCont3").css("border", "1px solid black");
  },function(){
    $("#vidCont3").css("background-color", "white");
    $("#vidCont3").css("box-shadow", "5px 10px 20px #888888");
    $("#vidCont3").css("border", "0px solid white");
  });
  $("#vidCont4").hover(function(){
    $("#vidCont4").css("background-color", "gray");
    $("#vidCont4").css("box-shadow", "5px 10px 20px white");
    $("#vidCont4").css("border", "1px solid black");
  },function(){
    $("#vidCont4").css("background-color", "white");
    $("#vidCont4").css("box-shadow", "5px 10px 20px #888888");
    $("#vidCont4").css("border", "0px solid white");
  });
});
