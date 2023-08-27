// Generate random secret number
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function for displaying message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Compare guess with secret number
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // If no guess is there
  if (!guess) {
    displayMessage("⛔ No Number!");
    // document.querySelector(".message").textContent = ("⛔ No Number!");
  }

  // If the guess is correct
  else if (guess === secretNumber) {
     // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  }

  // If the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      // document.querySelector(".message").textContent = guess > secretNumber ? ("📈Too High!") : ("📉Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the Game!';
      displayMessage("💥You lost the Game!");
      score--;
      document.querySelector(".score").textContent = 0;
    }
  }

  // else if(guess > secretNumber){
  //    if(score > 1){
  //       document.querySelector(".message").textContent = ("📈Too High!");
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //    }
  //    else{
  //       document.querySelector(".message").textContent = ("💥You lost the Game!");
  //       score--;
  //       document.querySelector(".score").textContent = 0;
  //    }
  // }

  // else if(guess < secretNumber){
  //    if(score > 1){
  //       document.querySelector(".message").textContent = ("📉Too Low!");
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //    }
  //    else{
  //       document.querySelector(".message").textContent = ("💥You lost the Game!");
  //       score--;
  //       document.querySelector(".score").textContent = 0;
  //    }
  // }
});

// Refresh the page by changing some of it's elements
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

// document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
