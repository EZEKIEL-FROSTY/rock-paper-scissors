// getComputerChoice Function: 
// get random number between 0-1 times 10 modulo 3 
// if rand === 0 : rock elif rand === 1: paper elif rand === 2: scissors

function getComputerChoice()
{
    let randChoice = Math.floor(Math.random() * 10);
    randChoice = randChoice % 3;
    if(randChoice === 0)
    {
        return "rock";
    }
    else if(randChoice === 1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

// getComputerChoice();

// getHumanChoice 
// use while
// prompt - change everything to lower case to standardise
// check validity if not valid then prompt again

function getHumanChoice()
{
    let humanChoice = prompt("rock, paper, scissors?");
    humanChoice = humanChoice.toLowerCase().trim();
    console.log(humanChoice);
    return humanChoice;

}
// getHumanChoice();

function playRound(humanChoice, computerChoice)
{
    if(humanChoice === computerChoice)
    {
        console.log("It is a tie!! No one wins.");
        return;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper")
    {
        console.log("You Win!! " + humanChoice + " beats " + computerChoice + " !!");
        return 1;
    }
    else
    {
        console.log("You lose!! " + computerChoice + " beats " + humanChoice + " !!");
        return 0;
    }
}



// humanChoice = getHumanChoice();
// computerChoice = getComputerChoice();
// playRound(humanChoice, computerChoice);

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    for (let i=0; i < 5; i++)
    {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        result = playRound(humanChoice, computerChoice);
        if(result === 1)
        {
            humanScore += 1;
        }
        else if (result === 0)
        {
            computerScore += 1;
        }
    }

    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

playGame();

