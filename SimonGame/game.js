var buttonColors = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

var gameStart = false;

var level = 0;

$(document).keypress(function(){
  if (!gameStart){
    gameStart = true;
    // $("#level-title").text("Level "+level);
    nextSequence();

    $("h2").remove(); //remove the "try again" in h2 when try again
  }
});

function nextSequence() {
  userClickedPattern = [];

  //Random generating pattern
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeIn(80).fadeOut(80).fadeIn(80);
  playSound(randomChosenColor);

  level++;
  $("#level-title").text("Level "+level);
}

//User clicks the button
$(".btn").click(function(){
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
});

//play corresponding sound for each button
function playSound(name) {
  var sound = new Audio("sounds/"+name+".mp3")
  sound.play();
}
//animation when pressing button
function animatePress(currentColor) {
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
      $("."+currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
      if (userClickedPattern.length == gamePattern.length){
        setTimeout(function(){
          nextSequence();
        }, 1000);
      }
    } else { //when answer is wrong:
        var wrongAudio = new Audio("sounds/wrong.mp3");
        wrongAudio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
          $("body").removeClass("game-over")
        }, 200);

        $("#level-title").text("Game Over");
        $("#level-title").after("<h2>Press Any Key to Try Again!</h2>");
        tryAgain();
    }
}

function tryAgain(){
  level = 0;
  gamePattern = [];
  gameStart = false;
}
