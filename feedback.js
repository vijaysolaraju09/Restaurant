$(document).ready(function(){

    function validate1() {
        let fname1=$("#uname").val();
        if (fname1==''){
            $("#uname").css('border',"2px solid red");
            return false;
        }
        
        else{
            $("#uname").css('border',"2px solid green");
            userCont=fname1
            return true;
        }
    }
    function validate2() {
        let commentEl=$("#comment").val();
        if (commentEl==''){
            $("#comment").css('border',"2px solid red");

            return false;
        }
        
        else{
            $("#comment").css('border',"2px solid green");
            commentCont=commentEl;
            return true;
        }
    }
    let userCont=""
    let commentCont=""

    $("#submitBtn").click(function(){
        validate1()
        validate2()
        if (validate1() && validate2()){
            $("#commentCont").append("<i>  </i>")
            $("i").attr("class","fas fa-user")
            $("i").text(userCont)
            $("#commentCont").append("<h4>hi</h4>")
            $("h4").text(commentCont)
            $("#commentCont").append("<hr>")
        }
        
    });
    $("#commentCont").click(function(){
        alert("bi")
    })
    
});