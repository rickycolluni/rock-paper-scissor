let compScore;
let humanScore;

while (true) {

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

console.log("Opponent has chosen");
let opponent = getComputerChoice();
console.log(opponent);

function getHumanChoice() {
  let incorrectInput = true;
  while (incorrectInput) {
    let answer = prompt("Please type in [rock], [paper], or [scissor]");
    if (answer == "rock" || answer == "paper" || answer == "scissor") {
      return answer;
    }
  }
}

let human = getHumanChoice();
console.log(human);



}