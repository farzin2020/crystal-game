

var result = 0;
var butt1;
$(document).ready(function () {
    $(".display").html(Math.floor(Math.random() * 120) + 19); 
    $("#gem1").on("click", function () {
        butt1 = Math.floor((Math.random() * 12) + 1);
        result = result + butt1;
        $("#result").html(result);
    });
    
    var butt2;
    
    $("#gem2").on("click", function () {
        butt2 = Math.floor((Math.random() * 12) + 1);
        result = result + butt2;
        $("#result").html(result);
    });
    
    var butt3;
    
    $("#gem3").on("click", function () {
        butt3 = Math.floor((Math.random() * 12) + 1);
        result = result + butt3;
        $("#result").html(result);
    });
    
    var butt4;
    
    $("#gem4").on("click", function () {
        butt4 = Math.floor((Math.random() * 12) + 1);
        result = result + butt4;
        $("#result").html(result);
    });

});
