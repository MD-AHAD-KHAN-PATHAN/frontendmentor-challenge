
const handOptions = {
    "rock": "images/Rock.png",
    "paper": "images/Paper.png",
    "scissors": "images/Scissors.png"

}

let SCORE = 0;

const pickUserHand = (hand) => {
    
    //hide the current page

    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    //show the next page with the hand you picked

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set the user chose
    
    document.getElementById("UserChoseImage").src = handOptions[hand];

    
    let cpHand = pickComputerHand();

    referee(hand, cpHand);


}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"]

    let cpHand = hands[Math.floor(Math.random() * 3)]

    // set the user chose
    
    document.getElementById("computerChoseImage").src = handOptions[cpHand];

    return cpHand;
}

const referee = (userHand, cpHand) => {

    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
    }
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
}

const restartGame = () => {

    //hide the current page

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    
    //show the next page with the hand you picked
    
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

}

const setDecision = (decision) => {
    
    document.querySelector(".decision h1").innerText = decision;

}

const setScore = (score) => {

    SCORE = score;
    document.querySelector(".score h1").innerText = score;

}