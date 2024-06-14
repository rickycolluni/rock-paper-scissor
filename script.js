function getComputerChoice() {
  let compChoice;
  let num;

  num = Math.random() * (91 - 1) + 1;

  switch (true) {
    case num > 60 :
      compChoice = "scissor";
      break;
    case num < 30 :
      compChoice = "paper";
      break;
    default :
      compChoice = "rock";
  }

  return compChoice;
}

function getHumanChoice() {
  let incorrectInput = true;
  while (incorrectInput) {
    let answer = prompt("Please type in [rock], [paper], or [scissor]");
    if (answer == "rock" || answer == "paper" || answer == "scissor") {
      return answer;
    }
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Draw! Both you and the computer chose " + humanChoice);
  } else if (humanChoice == "rock") {
    if (computerChoice == "paper") {
        console.log("You Lose, you picked " + humanChoice + ", Computer chosen " + computerChoice);
        compScore += 1;
    } else {
        console.log("You Win, you picked " + humanChoice + ", Computer chosen " + computerChoice);
        humanScore += 1;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "scissor") {
      console.log("You Lose, you picked " + humanChoice + ", Computer chosen " + computerChoice);
      compScore += 1;
    } else {
      console.log("You Win, you picked " + humanChoice + ", Computer chosen " + computerChoice);
      humanScore += 1;
    }
  } else if (humanChoice == "scissor") {
    if (computerChoice == "rock") {
      console.log("You Lose, you picked " + humanChoice + ", Computer chosen " + computerChoice);
      compScore += 1;
    } else {
      console.log("You Win, you picked " + humanChoice + ", Computer chosen " + computerChoice);
      humanScore += 1;
    }
  }
}

function playGame(amountOfGames) {

  for (let i = 0; i < amountOfGames; i++) {
    console.log("Opponent has chosen");
    let opponent = getComputerChoice();
    console.log(opponent);
    let human = getHumanChoice();
    console.log(human);

    playRound(human, opponent);

    console.log(humanScore + " vs " + compScore);
  }
}

let compScore = 0;
let humanScore = 0;
playGame(5);
if (humanScore > compScore) {
  console.log("Congratulations, You won");
} else if (humanScore < compScore) {
  console.log("Too bad, You lost");
} else {
  console.log("Both You and the computer are tied");
}