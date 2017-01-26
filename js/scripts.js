function Player(symbol) {
  this.choices = [];
  this.symbol = symbol;
}

var winCombos = [[11,12,13],[21,22,23],[31,32,33],[11,21,31],[12,22,32],[13,23,33],[11,22,33],[13,22,31]];


Player.prototype.check = function() {
  for ( i=0; i<winCombos.length; i++ ) {
    counter = 0;
    for ( j=0; j<winCombos[i].length; j++ ) {
      for ( var k = 0; k<this.choices.length; k++) {
        if (this.choices[k] === winCombos[i][j]) {
          counter += 1;
          if (counter === 3) {
            alert("winner");
          }
        }
      }
    }
  }
}
var playerX = new Player("x");
var playerO = new Player("o");
var currentPlayer = playerO;
var nextPlayer;

Player.prototype.switchPlayer = function(currentPlayer) {
  if (currentPlayer.symbol === "o") {
    currentPlayer = playerX;
  } else {
    currentPlayer = playerO;
  }
  return currentPlayer;
}

$(document).ready(function(){


    $("#sq11").click(function(){
        currentPlayer.choices.push(11)
        $("#" + currentPlayer.symbol + "11").animate({
            height: '100%',
            width: '100%',
        });
        currentPlayer.check();
        nextPlayer = currentPlayer.switchPlayer(currentPlayer);
        $("#" + nextPlayer.symbol + "11").hide();
    });
    // $("#sq12").click(function(){
    //     currentPlayer.choices.push(12)
    //     $("#" + currentPlayer.symbol + "12").animate({
    //         height: '100%',
    //         width: '100%'
    //     });
    //     currentPlayer.check();
    //     currentPlayer = player2;
    //     $("#" + currentPlayer.symbol + "12").hide();
    // });
//     $("#x12").click(function(){
//         x.push(12)
//         $("#o12").hide();
//         $("#x12").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkX();
//     });
//     $("#o12").click(function(){
//         o.push(12)
//         $("#x12").hide();
//         $("#o12").animate({
//             height: '100%',
//             width: '100%'
//         });
//         alert(o);
//     });
//     $("#x13").click(function(){
//         x.push(13)
//         $("#o13").hide();
//         $("#x13").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkX();
//     });
//     $("#o13").click(function(){
//         o.push(13)
//         $("#x13").hide();
//         $("#o13").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkO();
//     });
// // END --- of the first row; START second Row
//
//     $("#x21").click(function(){
//         x.push(21)
//         $("#o21").hide();
//         $("#x21").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkX();
//     });
//     $("#o21").click(function(){
//         o.push(21)
//         $("#x21").hide();
//         $("#o21").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkO();
//     });
//     $("#x22").click(function(){
//         x.push(22)
//         $("#o22").hide();
//         $("#x22").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkX();
//     });
//     $("#o22").click(function(){
//         o.push(22)
//         $("#x22").hide();
//         $("#o22").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkO();
//     });
//     $("#x23").click(function(){
//         x.push(23)
//         $("#o23").hide();
//         $("#x23").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkX();
//     });
//     $("#o23").click(function(){
//         o.push(23)
//         $("#x23").hide();
//         $("#o23").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkO();
//     });
// // End of the second row --- Begin third Row
//
//     $("#x31").click(function(){
//         x.push(31)
//         $("#o31").hide();
//         $("#x31").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkX();
//     });
//     $("#o31").click(function(){
//         o.push(31)
//         $("#x31").hide();
//         $("#o31").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkO();
//     });
//     $("#x32").click(function(){
//         x.push(32)
//         $("#o32").hide();
//         $("#x32").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkX();
//     });
//     $("#o32").click(function(){
//         o.push(32)
//         $("#x32").hide();
//         $("#o32").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkO();
//     });
//     $("#x33").click(function(){
//         x.push(33)
//         $("#o33").hide();
//         $("#x33").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkX();
//     });
//     $("#o33").click(function(){
//         o.push(33)
//         $("#x33").hide();
//         $("#o33").animate({
//             height: '100%',
//             width: '100%'
//         });
//         checkO();
//     });

});
