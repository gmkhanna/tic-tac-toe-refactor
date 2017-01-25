







$(document).ready(function(){
    $("#x11").click(function(){
        $("#o11").hide();
        $("#x11").animate({

            height: '100%',
            width: '100%'
        });
    });
    $("#o11").click(function(){
        $("#x11").hide();
        $("#o11").animate({

            height: '100%',
            width: '100%'
        });
    });
});
