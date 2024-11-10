let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random ()* 3);
    return options[randomIdx];
};

    const drawGame = () => {
        // console.log("😑Game was Draw😑")
        msg.innerText = "😑Game was Draw!😑  Play Again";
        msg.style.backgroundColor = " rgb(63, 194, 170)";  
    };

    const showWinner = (userWin, userChoice, computerChoice) => {
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            // console.log("🎉Congratulations! You Win🎉");
            msg.innerText = `🎉Congratulations! You Win🎉 Your ${userChoice} beats ${computerChoice}`;
            msg.style.backgroundColor = "green";
            } else {
                computerScore++;
                computerScorePara.innerText = computerScore;
                // console.log("🫠Oops! You Lose🫠");
                msg.innerText = `🫠Oops! You Lose🫠 ${computerChoice} beats your${userChoice}`;
                msg.style.backgroundColor = "red";
        }
    };
    
const playGame = (userChoice) => {
    // console.log("user choice =", userChoice);
    //Genrate computere choice => modular
    const computerChoice = genCompChoice();
    // console.log("computer choice =", computerChoice);

    if(userChoice === computerChoice) {
        //Draw Game
        drawGame();
        } else{
            let userWin = true;
            if(userChoice === "rock"){
                //scissor, paper
                userWin = computerChoice === "paper" ? false : true;
            }else if(userChoice === "paper") {
                //rock, scissors
                userWin = computerChoice === "scissors" ? false : true;
                }else {
                    //paper, rock
                    userWin = computerChoice === "rock" ? false : true;
                    }
                  showWinner(userWin, userChoice, computerChoice);
        }
    };

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", choice);
        playGame(userChoice);
});
});