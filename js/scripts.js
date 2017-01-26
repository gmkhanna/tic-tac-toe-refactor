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
// var nextPlayer;

var switchPlayer = function() {
  if (currentPlayer.symbol === "o") {
    currentPlayer = playerX;
  } else {
    currentPlayer = playerO;
  }
}

$(document).ready(function(){


    $("#sq11").click(function(){
        currentPlayer.choices.push(11)
        $("#" + currentPlayer.symbol + "11").animate({
            height: '100%',
            width: '100%',
        });
        currentPlayer.check();
        switchPlayer();
        $("#" + currentPlayer.symbol + "11").hide();
    });

    $("#sq12").click(function(){
        currentPlayer.choices.push(12)
        $("#" + currentPlayer.symbol + "12").animate({
            height: '100%',
            width: '100%',
        });
        currentPlayer.check();
        switchPlayer();
        $("#" + currentPlayer.symbol + "12").hide();
    });

    $("#sq13").click(function(){
        currentPlayer.choices.push(13)
        $("#" + currentPlayer.symbol + "13").animate({
            height: '100%',
            width: '100%',
        });
        currentPlayer.check();
        switchPlayer();
        $("#" + currentPlayer.symbol + "13").hide();
    });

    $("#sq21").click(function(){
        currentPlayer.choices.push(21)
        $("#" + currentPlayer.symbol + "21").animate({
            height: '100%',
            width: '100%',
        });
        currentPlayer.check();
        switchPlayer();
        $("#" + currentPlayer.symbol + "21").hide();
    });

    $("#sq22").click(function(){
        currentPlayer.choices.push(22)
        $("#" + currentPlayer.symbol + "22").animate({
            height: '100%',
            width: '100%',
        });
        currentPlayer.check();
        switchPlayer();
        $("#" + currentPlayer.symbol + "22").hide();
    });

    $("#sq23").click(function(){
        currentPlayer.choices.push(23)
        $("#" + currentPlayer.symbol + "23").animate({
            height: '100%',
            width: '100%',
        });
        currentPlayer.check();
        switchPlayer();
        $("#" + currentPlayer.symbol + "23").hide();
    });

    $("#sq31").click(function(){
        currentPlayer.choices.push(31)
        $("#" + currentPlayer.symbol + "31").animate({
            height: '100%',
            width: '100%',
        });
        currentPlayer.check();
        switchPlayer();
        $("#" + currentPlayer.symbol + "31").hide();
    });

    $("#sq32").click(function(){
        currentPlayer.choices.push(32)
        $("#" + currentPlayer.symbol + "32").animate({
            height: '100%',
            width: '100%',
        });
        currentPlayer.check();
        switchPlayer();
        $("#" + currentPlayer.symbol + "32").hide();
    });

    $("#sq33").click(function(){
        currentPlayer.choices.push(33)
        $("#" + currentPlayer.symbol + "33").animate({
            height: '100%',
            width: '100%',
        });
        currentPlayer.check();
        switchPlayer();
        $("#" + currentPlayer.symbol + "33").hide();
    });
});
