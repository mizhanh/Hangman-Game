//Declare variables
//=================================================================
var wrongLetter = [];
var audio;
var wins = 0;
var losses = 0;
var remainLives = 0;
var lives = 6;
var choiceIndex = 0;
var currentWord;
var randomWord = [];
var guessWord = [];

//List of words
var	words = ['pumpkin', 'ghost', 'treats', 'costume', 'tombstone', 'skeleton', "candy"];

//Functions
//===================================================================
function selectWord() {
	//Randomly choose a word from the array list
	randomWord = words[Math.floor(Math.random() * words.length)];
 	console.log(randomWord);
 	alert("Here is the new word.  You have " + lives + " guesses to try.  Good luck!");

	//Underscore each letter from the random word
	// var guessWord = [];
	for (var i = 0; i < randomWord.length; i++) {
		guessWord[i] = "_";
		guessWordU = guessWord.join(" ");
		document.getElementById("playWord").innerHTML = guessWordU;			
	}	
}

//Add music when game starts
function initAudioPlayer() {
	audio = new Audio();
	audio.src = "(Disc 2) 04 - Thriller.mp3";
	audio.loop = true;
	audio.play();
}

function updateScore() {
	document.querySelector("#gameWins").innerHTML = wins;
 	document.querySelector("#gameLosses").innerHTML = losses;	
}

function livesRemain() {
	remainLives = lives;
	document.querySelector("#livesRemain").innerHTML = remainLives;
    document.querySelector("#guessedLetters").innerHTML = wrongLetter;
}

function reset() {
	lives = 6;
	guessWord = [];
	wrongLetter = [];
	guessedLetter = [];
	livesRemain();
	selectWord();
	initAudioPlayer();
}
//========================================================================	

//Start Game
//========================================================================
selectWord();
updateScore();
livesRemain();
initAudioPlayer();

document.onkeyup = function(event) {   
    userGuess = event.key;

	for (var i=0; i <randomWord.length; i++) {
		if (userGuess === randomWord[i]) {
			guessWord[i] = userGuess;			
			}
		}
 	 	
 	if (guessWord.indexOf(userGuess) !== -1) {	  	
	  	document.getElementById("playWord").innerHTML = guessWord.join(" ");
	  	 	  		  	
 	  	if(guessWord.join("") === randomWord) { 			 	  		
 	  		wins++;
 	  		alert("Correct!  The word is " + randomWord);
 	  		alert("You Win!  Want to play again?");	
 	  		updateScore();
 	  		reset();
 	  	 }	
 	  			
 	} else {
 	  		wrongLetter.push(userGuess);
 	  		lives--;
 	  		remainLives = lives;	  		
 	  		livesRemain();	  	
 	  		if (remainLives === 0) {
 	  			losses++;
 	  			alert("Sorry, the correct word is " + randomWord);
 	  			alert("Want to play again?");
 	  			updateScore();
 	  			reset();
 	  		}	  		 			  		
 		}
	};

 


