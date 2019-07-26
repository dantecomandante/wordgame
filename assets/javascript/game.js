
		const word;

		let guess;		//user guess
		let letters = [];		//correct guessed letters
		let wrongLetters = [];		//wrong guessed letters
		let counter;		//count correct letters
		let losses = 0;
		let wins = 0;


		document.getElementById("losses").innerHTML = losses;
		document.getElementById("wins").innerHTML = wins;

		let wordList = ["guitar", "drum", "piano", "flute", "sax"]; 		


		function start() {
		    word = wordList[Math.floor(Math.random() * wordList.length)];
		    counter = 7;
		    document.getElementById("counter").innerHTML = counter;
		    for (i = 0; i < word.length; i++) {
		        letters[i] = "__";
		    }

		    document.getElementById("answer").innerHTML = letters.join(" ");
		    console.log(word);

		}


		//checks if letter is in the word or not
		function checkLetter() {
			document.onkeyup = function(event) {
				guess = event.key.toLowerCase();
				let found = false;
				for (i = 0; i < word.length; i++) {
					if (guess === word[i]) {
						letters[i] = guess;
						document.getElementById("answer").innerHTML = letters.join(" ");
						found = true;
					} 
				}
				//wrong letters go into the wrongLetters array and are displayed
				if (found) return;
				if (wrongLetters.indexOf(guess) < 0) {
					wrongLetters.push(guess);
					document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
					//every wrong guess subtracts one from the counter
					counter--;
					console.log(counter);
					document.getElementById("counter").innerHTML = counter;


					if (counter === 0) {
						document.getElementById("losses").innerHTML = losses + 1;
						console.log(losses);
						confirm("YOU LOSE!! Play again?"); {
							losses++;
							counter = 7;
							letters = [];
							wrongLetters = [];
							start();
						}
					}
				}
			}
		}


		start();
		checkLetter();