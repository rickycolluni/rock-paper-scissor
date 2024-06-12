console.log("Hello World");

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

let opponent = getComputerChoice();
console.log(opponent);