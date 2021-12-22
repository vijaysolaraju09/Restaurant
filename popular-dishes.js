$(document).ready(function(){

    $("#popWishCont1").css("display","none");
    $("#popWishCont2").css("display","none");
    $("#popWishCont3").css("display","none");
    $("#popWishCont4").css("display","none");
    $("#popWishCont").css("display","none");
    $("#popWishCont5").css("display","none");
    $("#totalPrice").css("display","none");
    $("#orderBtn").css("display","none");
    


    $("#btn1").hover(function(){
        
        $("#btn1").css("padding","5px")
    },
    function(){
        $("#btn1").css("padding","10px")
    });
    $("#btn2").hover(function(){
        $("#btn2").css("padding","5px")
    },
    function(){
        $("#btn2").css("padding","10px")
    });
    $("#btn3").hover(function(){
        $("#btn3").css("padding","5px")
    },
    function(){
        $("#btn3").css("padding","10px")
    });
    $("#btn4").hover(function(){
        $("#btn4").css("padding","5px")
    },
    function(){
        $("#btn4").css("padding","10px")
    });
    $("#totalPrice").hover(function(){
        
        $("#totalPrice").css("padding","5px")
    },
    function(){
        $("#totalPrice").css("padding","10px")
    });
    $("#orderBtn").hover(function(){
        
        $("#orderBtn").css("padding","5px")
    },
    function(){
        $("#orderBtn").css("padding","10px")
    });
    let total=0
    $("#btn1").click(function(){
        $("#emptyWishlist").css("display","none");
        $("#popWishCont").css("display","flex");
        $("#popWishCont1").css("display","flex");
        $("#totalPrice").css("display","flex");
        total=total+190
    })
    $("#btn2").click(function(){
        $("#popWishCont").css("display","flex");
        $("#emptyWishlist").css("display","none");
        $("#popWishCont2").css("display","flex");
        $("#totalPrice").css("display","flex");
        total=total+239
    })
    $("#btn3").click(function(){
        $("#popWishCont").css("display","flex");
        $("#emptyWishlist").css("display","none");
        $("#popWishCont3").css("display","flex");
        $("#totalPrice").css("display","flex");
        total=total+259
    })
    $("#btn4").click(function(){
        $("#popWishCont").css("display","flex");
        $("#emptyWishlist").css("display","none");
        $("#popWishCont4").css("display","flex");
        $("#totalPrice").css("display","flex");
        total=total+340
    })
    $("#totalPrice").click(function(){
        $("#popWishCont5").css("display","flex");
        $("#total").text(total)
        $("#orderBtn").css("display","flex");
    })
    $("#orderBtn").click(function(){
        alert("Ordered Successfully!")
    })
    
});