let userScore = 0;
let compScore = 0;

// access the element
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const genCompChoice = () => {                      // * Computer choice
    const options = ["rock", "paper", "scissors"];        
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawgame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        console.log("You win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
        
    } else {
        compScore++;
        compScorePara.innerText = compScore;

        console.log("You lose");
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}


const playgame = (userChoice) => {                // ** user & Computer choice logic
    console.log("user choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawgame();
    } else {
        let userWin = true;         // mtlb user jeet gaya (true)
        if(userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {                        // * user Choice
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        // console.log("choice was clicked", userChoice);
        playgame(userChoice)
    });
});