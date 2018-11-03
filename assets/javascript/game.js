var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winCount = 0;
var lossCount = 0;
var guessesLeftCount = 9;
var guessedLetters = []; //Array to capture users letter input


var randomPick = letters[Math.floor(Math.random() * letters.length)];
//console.log("randomPick : "+ randomPick); // To see the random pick in console

document.onkeyup = function (event) {     // This function is run whenever the user presses a key.
    var userGuess = event.key;  // which key was pressed.
    guessedLetters.push(userGuess); // This will capture the letter pressed by user

    if (userGuess != randomPick) {
        guessesLeftCount--;

    }
    else {
        winCount++;
        guessesLeftCount = 9;
        guessedLetters = [];
    }

    // if guessed wrong 9 times
    if (guessesLeftCount === 0) {
        lossCount++;
        guessesLeftCount = 9;
        guessedLetters = [];
    }

    // Create variables that hold references to the places in the HTML where we want to display things.
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("remGuess").innerHTML = guessesLeftCount;
    document.getElementById("losses").innerHTML = lossCount;
    document.getElementById("userGuessed").innerHTML = guessedLetters.toString();

}


