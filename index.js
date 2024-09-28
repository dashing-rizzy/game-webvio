// Username display ------------->
let userDisplayName = document.querySelector("#username-dis");
inputName = prompt(`Enter your First Name : `);
userDisplayName.innerHTML = `Welcome ${inputName} !`;

//Playgame ------------ >

let userScore = 0;
let compScore = 0;

// UserMove calc

let moves = document.querySelectorAll(".move");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const userPlay = (userChoice) => {
  const compChoice = getCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === `rock`) {
      userWin = compChoice === `paper` ? false : true;
    } else if (userChoice === `paper`) {
      userWin = compChoice === `scissors` ? false : true;
    } else if (userChoice === `scissors`) {
      userWin = compChoice === `rock` ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = `Game was Draw`;
  msg.style.backgroundColor = "Yellow";
  msg.style.color = "Black";
};

moves.forEach((move) => {
  move.addEventListener("click", () => {
    const userChoice = move.getAttribute("id");
    userPlay(userChoice);
  });
});

let showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win`;
    msg.style.backgroundColor = "Green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose`;
    msg.style.backgroundColor = "Red";
  }
};

let msg = document.querySelector("#results");
