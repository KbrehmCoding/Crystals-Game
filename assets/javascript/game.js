var wins = 0;
var losses = 0;
var score = 0;
var targetNumber = 0;

function getRandomInt(min, max) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startNewGame() {
    score = 0;
    targetNumber = getRandomInt(19, 120);
    $("#targetNumber-text").text(targetNumber);
    createCrystals();
}

function createCrystals() {
    $("#crystals").empty();
    for (var i = 0; i < 4; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
        imageCrystal.attr("data-crystalvalue", getRandomInt(1, 12));
        $("#crystals").append(imageCrystal);
    }
}

function setCrystalsClickHandler() {
    $("#crystals").on("click", ".crystal-image", function () {
        var crystalValue = parseInt($(this).attr("data-crystalvalue"));
        score += crystalValue;
        if (score === targetNumber) {
            wins++;
            startNewGame();
        } else if (score > targetNumber) {
            losses++;
            startNewGame();
        }
        $("#wins-text").text(wins);
        $("#losses-text").text(losses);
        $("#score-text").text(score);
    });
}

$(document).ready(function () {
    setCrystalsClickHandler();
    startNewGame();
});
