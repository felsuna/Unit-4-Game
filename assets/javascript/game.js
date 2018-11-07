var computerChoice = '';
var userOption =[1,2,3,4,5,6,7,8,9,10,11,12];
var wins = 0;
var losses = 0;
var counter = '';
var userGuess = 0;

$("#computer-choice").text(computerChoice);
$("#user-wins").text("Wins: " + wins);
$("#user-losses").text("Losses: " + losses);
$("#total-score").text("Your total score: " + counter);
$("#user-guesses").text(userGuess);

//Random number generated for the computer's choice (targetNumber).
if (computerChoice === ''){
    var random = Math.floor(Math.random() * 120) + 19;
    $("#computer-choice").text(computerChoice + random);
    console.log(random);
}

//User options.
for (var i = 0; i <userOption.length; i++) {
    
}

//If user's total equals the computer's choice, we add 1 point to wins and resets the game.
if (userGuess === computerChoice) {
    wins++;
    computerChoice = '';
    counter = '';
    userGuess = 0;
}else {
    losses++;
    computerChoice = '';
    counter = '';
    userGuess = 0;
}

