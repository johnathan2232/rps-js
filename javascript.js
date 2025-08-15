console.log("Hello World")
function getComputerChoice()
{
    /* 
    Math.random gets a number that = 0, greater than 0 and less than 1
    
    */
   let x = Math.random();
    if(0 <= x && x < .33)
    {
        return "rock";
    }
    else if(.33 <= x && x < .66)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }

}
/*console.log(getComputerChoice());*/
function getHumanChoice()
{
    let choice = prompt("Rock, Paper, or Scissors? ");
    if (choice.toLowerCase() == 'rock')
    {   
        return 'rock';
    }
    else if (choice.toLowerCase() == 'paper')
    {   
        return 'paper';
    }
    else if (choice.toLowerCase() == 'scissors')
    {   
        return 'scissors';
    }
    else
    {
        return "Guess you don't know how to play"
    }
}
/*console.log(getHumanChoice());*/
let humanscore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice)
{
    if(humanChoice == computerChoice)
    {
        return console.log("It's a tie! No points!");
    }
    else if(humanChoice == 'scissors' && computerChoice == 'rock')
    {
        computerScore += 1;
        return console.log("You Lose!");
    }
    else if(humanChoice == 'scissors' && computerChoice == 'paper')
    {
        humanscore += 1;
        return console.log("Congrats you won!");  
    }
    else if(humanChoice == 'rock' && computerChoice == 'paper')
    {
        computerScore += 1;
        return console.log("You Lose!");
    }
    else if(humanChoice == 'rock' && computerChoice == 'scissors')
    {
        humanscore += 1;
        return console.log("Congrats you won!");
    }
    else if(humanChoice == 'paper' && computerChoice == 'scissors')
    {
        computerScore += 1;
        return console.log("You Lose!");
    }
    else if(humanChoice == 'paper' && computerChoice == 'rock')
    {
        humanscore += 1;
        return console.log("Congrats you won!");
    }
    /*let hfinal = "You won: " + humanscore + " rounds";
    let cfinal = "Computer won: " + computerScore + " rounds";
    console.log(hfinal);
    console.log(cfinal);*/
}


/*let humanselect = getHumanChoice();
let computerselect = getComputerChoice();
console.log(humanselect);
console.log(computerselect);
playRound(humanselect, computerselect);*/

function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        let humanselect = getHumanChoice();
        let computerselect = getComputerChoice();
        console.log(humanselect);
        console.log(computerselect);
        playRound(humanselect, computerselect);
    }
    let hfinal = "You won: " + humanscore + " rounds";
    let cfinal = "Computer won: " + computerScore + " rounds";
    console.log(hfinal);
    console.log(cfinal);
    if(humanscore > computerScore)
    {
         console.log("You win the game!");
    }
    else if(computerScore > humanscore)
    {
         console.log("You lose the game!");
    }
    else
    {
         console.log("It's a tie!");
    }
    return console.log("Game Over");
}
playGame()
