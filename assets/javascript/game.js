
var wins = 0;
var losses = 0;
var score = 0;
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var scoreText = document.getElementById("score-text");

function startNewGame() {
    score = 0;
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function getRandomInt(min, max) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var targetNumber = getRandomInt(19, 120);
("#number-to-guess").text(targetNumber);
var counter = 0;

for (var i = 0; i < 4; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal.attr("data-crystalvalue", getRandomInt(1, 12));
    ("#crystals").append("crystals");
}

(".crystal-image").on("click", function () {
    var crystalValue = parseInt($(this).attr("data-crystalvalue"));
    counter += crystalValue;
    alert("New score: " + counter);
    if (counter === targetNumber) {
        wins++;
    } else if (counter > targetNumber) {
        losses++;
    }
});
