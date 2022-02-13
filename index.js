// FIRST DICE
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let imageNumber1 = 'images/dice' + randomNumber1 + '.png';
document.querySelectorAll("img")[0].setAttribute("src", imageNumber1);

// SECOND DICE
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageNumber2 = 'images/dice' + randomNumber2 + '.png';
 document.querySelectorAll("img")[1].setAttribute("src", imageNumber2);

// change heading

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
