var computerChoice = '';
// var userOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var wins = 0;
var losses = 0;
var totalScore = 0;
var userGuess = 0;
var crystalArray = [
    'assets/images/Aquamarine.png',
    'assets/images/Citrine.png',
    'assets/images/diamond_gem_ruby.png',
    'assets/images/Emerald.png'
];

$("#computer-choice").text(computerChoice);
$("#user-wins").text("Wins: " + wins);
$("#user-losses").text("Losses: " + losses);
$("#total-score").text("Your total score: " + totalScore);
$("#user-guesses").text(userGuess);

//Assigning random number to images, between 1 and 12.
for (var i = 0; i < crystalArray.length; i++) {
    var newCrystal = $('<img>');
    newCrystal.attr('src', crystalArray[i]);
    newCrystal.attr('data-random', Math.ceil(Math.random() * 12));
    newCrystal.attr('class', 'crystals');
    $('#crystals').append(newCrystal);
}

//Random number generated for the computer's choice.
if (computerChoice === '') {
    var random = Math.floor(Math.random() * 102) + 19;
    $("#computer-choice").text(computerChoice + random);
    console.log(random, "Computer's choice");
}

//Crystal click function, and also adds the integer each time a crystal is clicked.
$('.crystals').on('click', function () {
    var crystalValue = parseInt($(this).attr('data-random'));
    totalScore += crystalValue;
    $("#total-score").text("Your total score: " + totalScore);
    $("#user-guesses").text(userGuess + crystalValue);
    console.log(totalScore,"Total Score");
    console.log(crystalValue, "Crystal Value");

    if (totalScore === computerChoice){
        wins++;
        totalScore = 0;
        userGuess = 0;
        crystalArray = [];
        computerChoice = '';
        console.log(wins,"Win");
    }
    else if (totalScore >= computerChoice){
        
    }
      
})


