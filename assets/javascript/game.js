var targetNumber = Math.floor(Math.random() * 102) + 19;
var wins = 0;
var losses = 0;
var totalScore = 0;
var crystalNumber = 0;
var crystalArray = [
    'assets/images/Aquamarine.png',
    'assets/images/Citrine.png',
    'assets/images/diamond_gem_ruby.png',
    'assets/images/Emerald.png'
];

$("#target-number").text("Target number: " + targetNumber);
$("#user-wins").text("Wins: " + wins);
$("#user-losses").text("Losses: " + losses);
$("#total-score").text("Your total score: " + totalScore);
$("#crystal-number").text(crystalNumber);

//Creating images to DOM and assigning random number to images, between 1 and 12.
for (var i = 0; i < crystalArray.length; i++) {
    var newCrystal = $('<img>');
    newCrystal.attr('src', crystalArray[i]);
    newCrystal.attr('data-random', Math.ceil(Math.random() * 12));
    newCrystal.attr('class', 'crystals');
    $('#crystals').append(newCrystal);
}

//Function to reset game. 
// I could not figure out how to get the crystal values to reset.  
// Tried to .empty the crystal div and re-add my fo-loop and game stopped working once I won or loss.
// This is what I tried to enter in my reset function:
// $('#crystals').empty();
// for (var i = 0; i < crystalArray.length; i++) {
//     var newCrystal = $('<img>');
//     newCrystal.attr('src', crystalArray[i]);
//     newCrystal.attr('data-random', Math.ceil(Math.random() * 12));
//     newCrystal.attr('class', 'crystals');
//     $('#crystals').append(newCrystal);
// }
function reset() {
    totalScore = 0;
    crystalNumber = 0;
    targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#target-number").text("Target number: " + targetNumber);
}

//Crystal click-function, and also adds the integer each time a crystal is clicked.
$('.crystals').on('click', function () {
    var crystalValue = parseInt($(this).attr('data-random'));
    totalScore += crystalValue;
    $("#total-score").text("Your total score: " + totalScore);
    $("#crystal-number").text(crystalNumber + crystalValue);
    
    // Score counter and game resets.
    if (totalScore === targetNumber) {
        wins++;
        $("#user-wins").text("Wins: " + wins);
        // $('#crystals').empty(newCrystal);
        reset();
    }
    else if (totalScore > targetNumber) {
        losses++;
        $("#user-losses").text("Losses: " + losses);
        // $('#crystals').empty(newCrystal);
        reset();
    }
})


