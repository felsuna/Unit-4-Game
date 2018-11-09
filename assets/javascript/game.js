var computerChoice = '';
var userOption =[1,2,3,4,5,6,7,8,9,10,11,12];
var wins = 0;
var losses = 0;
var counter = 0;
var userGuess = 0;
var crystalArray = ['assets/images/Aquamarine.png', 'assets/images/Citrine.png', 'assets/images/diamond_gem_ruby.png', 'assets/images/Emerald.png'];

for (var i = 0; i <crystalArray.length; i++) {
    var newCrystal = $('<img>');
    newCrystal.attr('src', crystalArray[i]);
    newCrystal.attr('data-random', Math.ceil(Math.random() * 12));
    newCrystal.attr('class', 'crystals');
    $('#crystals').append(newCrystal);
}

$('.crystals').on('click', function(){
    var value = parseInt($(this).attr('data-random'));
    counter += value;
    $("#total-score").text("Your total score: " + counter + value);
    console.log(counter);
    console.log(value);
})

$("#computer-choice").text(computerChoice);
$("#user-wins").text("Wins: " + wins);
$("#user-losses").text("Losses: " + losses);
$("#total-score").text("Your total score: " + counter);
$("#user-guesses").text(userGuess);

//Random number generated for the computer's choice (targetNumber).
if (computerChoice === ''){
    var random = Math.floor(Math.random() * 102) + 19;
    $("#computer-choice").text(computerChoice + random);
    console.log(random);
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

