var win = 0;

var loss = 0;

var tie = 0;

var options = ['R', 'P', 'S'];


function playgame() {
    var userInput = prompt("Please enter R, P, or S to play Rock Paper Scissors");
    var compInput = options[Math.floor(Math.random() * options.length)];
    if (!userInput || !options.includes(userInput)) {
        alert('Please enter R, P, or S.')
        playgame();
    }
        else if(userInput.toUpperCase() === compInput){
            tie++;
            alert(`The computer chose ${compInput}. It's a tie!`);
        } else if (
            (userInput === "R" && compInput === "S") ||
            (userInput === "S" && compInput === "P") ||
            (userInput === "P" && compInput === "R")
        ) { win++;
            alert(`The computer chose ${compInput}. Congratulations, you won!`);
            } else {
                loss++;
                alert(`The computer chose ${compInput}. Sorry, you lost!`);
            }
    alert(`Wins: ${win} Losses: ${loss} Ties: ${tie}`);
    var playAgain = confirm('Would you like to play again?');
    if (playAgain) {
        playgame();
    } 
}

playgame();