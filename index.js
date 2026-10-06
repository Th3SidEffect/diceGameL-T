//Instances of all nodes
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");

let score1 = document.querySelector("#score--0");
let score2 = document.querySelector("#score--1");

let current1 = document.querySelector("#current--0");
let current2 = document.querySelector("#current--1");

let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnHold = document.querySelector(".btn--hold");
let btnRoll = document.querySelector(".btn--roll");

//Declare few variables for internal working 
let mainScore1, mainScore2, currentScore, activePlayer, playing;



btnNew.addEventListener("click", newGame);
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdDice);


function newGame() {
    playing = true;
    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    diceEl.classList.add("hidden");
    activePlayer = 1;
    player1.classList.remove("player--winner");
    player2.classList.remove("player--winner");
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
    currentScore = 0;
    mainScore1 = 0;
    mainScore2 = 0;
}

function rollDice() {
    if(playing) {
        let random = Math.floor(Math.random() * 6) + 1;
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${random}.png`;
        if(random == 1) {
            changePlayer();
        }
        else{
            currentScore += random;
            if(activePlayer == 1) {
                current1.textContent = currentScore;
                mainScore1 += currentScore;
                score1.textContent = mainScore1;
            }
            else{
                current2.textContent = currentScore;
                mainScore2 += currentScore;
                score2.textContent = mainScore2;
            }
        }
    }
}

function holdDice() {
    if(activePlayer == 1) {
        currentScore += mainScore1;
        score1.textContent = currentScore;
        if(mainScore1 >= 100) {
            player1.classList.add("player--winner");
            diceEl.classList.add("hidden");
            playing = false;
        }
        else{
            changePlayer();
        }
    }
    else{
       currentScore += mainScore2;
        score2.textContent = currentScore;
        if(mainScore2 >= 100) {
            player2.classList.add("player--winner");
            diceEl.classList.add("hidden");
            playing = false;
        }
        else{
            changePlayer();
        } 
    }
}

function changePlayer() {
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
    currentScore = 0;
}



//New btn functionality:
/*
Reset player 1 and player 2 main scores
reset player 1 and player 2 current scores
set starting player as player 1 
hide dice image
make active player 1
make playing true
*/ 

//roll btn functionality
/*
generate random no between 1 and 6 
change dice image
check we are playing or not
check for 1 
if 1 then change the player 
if not add random value to current score

*/

//hold btn functionality
/*
add current score to total score of that current player
check if current score is greater than 100
if yes then current active player wins then hide the image add a class in active player
make playing false
if no then switch to other player
*/

