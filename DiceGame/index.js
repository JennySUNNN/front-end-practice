document.querySelector(".refreshBtn").addEventListener("click", function(){
  location.reload()
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

var randomNumber1 = getRandomIntInclusive(1,6);
document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2 = getRandomIntInclusive(1,6);
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2) {
  document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector(".container h1").innerHTML = "Player 2 Wins🚩";
}
else {
  document.querySelector(".container h1").innerHTML = "Draw!";
}
