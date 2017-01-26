var x = [];
var o = [];

winCombos = [[11,12,13],[21,22,23],[31,32,33],[11,21,31],[12,22,32],[13,23,33],[11,22,33],[13,22,31]];

// function arrayCheck(player) {
//   counter = 0;
//   for ( i=0; i<player.length; i++ )
//   {
//     for ( j=0; j<winCombos[i].length; j++ )
//     {
//       if (player[i] = winCombos[j][i]) {
//         counter += 1;
//         console.log();
//       } else {
//       }
//     }
//   }
// }

function arrayCheck(player) {
  for ( i=0; i<winCombos.length; i++ ) {
    console.log("i = " + i);
    for ( j=0; j<winCombos[i].length; j++ ) {
      counter = 0;
      for ( var k = 0; k<player.length; k++) {
        if (player[k] === winCombos[i][j]) {
          counter += 1;
          if (counter === 3) {
            alert("winner");
          }

          console.log("I FOUND ONE");
          // console.log(counter);
        } else {
          console.log('not found');
        }
      }
      console.log(counter);
    }
  }
}



$(document).ready(function(){

    $("#x11").click(function(){
        x.push(11,12,13)
        $("#o11").hide();
        $("#x11").animate({
            height: '100%',
            width: '100%'
        });
        arrayCheck(x);
    });
    $("#o11").click(function(){
        o.push(11)
        $("#x11").hide();
        $("#o11").animate({
            height: '100%',
            width: '100%'
        });
        arrayCheck(o);
    });
    $("#x12").click(function(){
        x.push(12)
        $("#o12").hide();
        $("#x12").animate({
            height: '100%',
            width: '100%'
        });
        alert(x);
    });
    $("#o12").click(function(){
        o.push(12)
        $("#x12").hide();
        $("#o12").animate({
            height: '100%',
            width: '100%'
        });
        alert(o);
    });
    $("#x13").click(function(){
        $("#o13").hide();
        $("#x13").animate({
            height: '100%',
            width: '100%'
        });
    });
    $("#o13").click(function(){
        $("#x13").hide();
        $("#o13").animate({
            height: '100%',
            width: '100%'
        });
    });
// END --- of the first row; START second Row

    $("#x21").click(function(){
        $("#o21").hide();
        $("#x21").animate({
            height: '100%',
            width: '100%'
        });
    });
    $("#o21").click(function(){
        $("#x21").hide();
        $("#o21").animate({
            height: '100%',
            width: '100%'
        });
    });
    $("#x22").click(function(){
        $("#o22").hide();
        $("#x22").animate({
            height: '100%',
            width: '100%'
        });
    });
    $("#o22").click(function(){
        $("#x22").hide();
        $("#o22").animate({
            height: '100%',
            width: '100%'
        });
    });
    $("#x23").click(function(){
        $("#o23").hide();
        $("#x23").animate({
            height: '100%',
            width: '100%'
        });
    });
    $("#o23").click(function(){
        $("#x23").hide();
        $("#o23").animate({
            height: '100%',
            width: '100%'
        });
    });
// End of the second row --- Begin third Row

    $("#x31").click(function(){
        $("#o31").hide();
        $("#x31").animate({
            height: '100%',
            width: '100%'
        });
    });
    $("#o31").click(function(){
        $("#x31").hide();
        $("#o31").animate({
            height: '100%',
            width: '100%'
        });
    });
    $("#x32").click(function(){
        $("#o32").hide();
        $("#x32").animate({
            height: '100%',
            width: '100%'
        });
    });
    $("#o32").click(function(){
        $("#x32").hide();
        $("#o32").animate({
            height: '100%',
            width: '100%'
        });
    });
    $("#x33").click(function(){
        $("#o33").hide();
        $("#x33").animate({
            height: '100%',
            width: '100%'
        });
    });
    $("#o33").click(function(){
        $("#x33").hide();
        $("#o33").animate({
            height: '100%',
            width: '100%'
        });
    });

});
