
var wins = 0;
var losses = 0;
var score = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (min - max + 1)) + min;
}

var targetNumber = getRandomInt(19, 120);
$("#number-to-guess").text(targetNumber);
var counter = 0;

for (var i = 0; i < 4; i++) {
    var imageCrystal = $("<img></img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append("crystals");
}

$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    }
});
