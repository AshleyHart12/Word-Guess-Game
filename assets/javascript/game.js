// Selectable Word List
var selectableWords = 
[
    "gunfight"
    "whiskey"
    "saloon"
    "cattle"
    "stampede"
    "grit"
    "buzzards"
    "chaps"
    "horse"
]

const maxTries = 10; // maximum guesses allowed

var guessedLetters = []; // Stores the letters guessed
var currentWordIndex;    // Index of current word in the array
var guessingWord = [];   // Word to build to match current word
var remainingGuesses = 0; // How many tried user has left
var gameStarted = false;  // Flag to tell if game has started
var hasFinished = false;  // 'Press any key to try again'
var wins = 0;             // How many wins the user has acquired

//Set up all Variables for the start of the game
function resetGame() { //reset game-level variables
    remainingGuesses = maxTries;
    gameStarted = false;

    //Math.floor to round DOWN to the nearest whole
    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));
    // Clear 
    guessedLetters = [];
    guessingWord = [];

    // Build guessing word and clear it out
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }
    updateDisplay();
}


