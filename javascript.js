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
/*function getHumanChoice()
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
        //return console.log("It's a tie! No points!");
        updateScore();
        lastMove(humanChoice, computerChoice);
        checkVictory(humanscore, computerScore);
        return;
    }
    else if(humanChoice == 'scissors' && computerChoice == 'rock')
    {
        computerScore += 1;
        updateScore();
        lastMove(humanChoice, computerChoice);
        checkVictory(humanscore, computerScore);
        return;
        //return console.log("You Lose!");
    }
    else if(humanChoice == 'scissors' && computerChoice == 'paper')
    {
        humanscore += 1;
        updateScore();
        lastMove(humanChoice, computerChoice);
        checkVictory(humanscore, computerScore);
        return;
        //return console.log("Congrats you won!");  
    }
    else if(humanChoice == 'rock' && computerChoice == 'paper')
    {
        computerScore += 1;
        updateScore();
        lastMove(humanChoice, computerChoice);
        checkVictory(humanscore, computerScore);
        return;
        //return console.log("You Lose!");
    }
    else if(humanChoice == 'rock' && computerChoice == 'scissors')
    {
        humanscore += 1;
        updateScore();
        lastMove(humanChoice, computerChoice);
        checkVictory(humanscore, computerScore);
        return;
        //return console.log("Congrats you won!");
    }
    else if(humanChoice == 'paper' && computerChoice == 'scissors')
    {
        computerScore += 1;
        updateScore();
        lastMove(humanChoice, computerChoice);
        checkVictory(humanscore, computerScore);
        return;
        //return console.log("You Lose!");
    }
    else if(humanChoice == 'paper' && computerChoice == 'rock')
    {
        humanscore += 1;
        updateScore();
        lastMove(humanChoice, computerChoice);
        checkVictory(humanscore, computerScore);
        return;
        //return console.log("Congrats you won!");
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
//playGame()
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scis');
rock.addEventListener("click", () =>
{
    let computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
    console.log(`You chose rock, computer chose ${computerChoice}`);
})
paper.addEventListener("click", ()=>
{
    let computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
    console.log(`You chose paper, computer chose ${computerChoice}`);
})
scissors.addEventListener("click", ()=>
{
    let computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
    console.log(`You chose scissors, computer chose ${computerChoice}`);
})
const result = document.querySelector('#result');
function updateScore()
{
    if(humanscore > computerScore)
    {
         result.textContent = "You are winning!";
    }
    else if(computerScore > humanscore)
    {
         result.textContent = "Computer is winning!";
    }
    else if (computerScore == humanscore)
    {
         result.textContent = "It's a tie!";    
    }
    result.textContent = 'Your Score: ' + humanscore + ' Computer Score: ' + computerScore;
}
const move = document.querySelector('#lastmoves');
function lastMove(humanChoice, computerChoice)
{
    move.textContent = 'You chose ' + humanChoice + ' Computer chose ' + computerChoice;
}
function checkVictory(humanscore, computerScore)
{
    if(humanscore == 5)
    {
        result.textContent = "You win the game!";
        move.textContent = '';
        disableButtons();
    }
    else if(computerScore == 5)
    {
        result.textContent = "You lose the game!";
        move.textContent = '';
        disableButtons();
    }
}
function disableButtons()
{
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}
const reset = document.querySelector('#reset');
reset.addEventListener("click", ()=>
{
    humanscore = 0;
    computerScore = 0;
    updateScore();
    move.textContent = '';
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
})