		var w=0;
		var l=0;
		var g=0;

		var userGuess = document.getElementById("user-guess");
    	var computerChoice = document.getElementById("computer-choice");
    	// var g = document.getElementById("guesses-left");

    	//Letters array 
    	var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    	for ( var i = 0; i <= 20; i++) {
	    	document.onkeyup = function(event) {
	    		if (g >= 10) {
	    			return;
	    		}
	    		//getting the user's input
	    		userGuess.textContent = event.key;
	    		//generating the computer's chouce
	    		computerChoice.textContent = letterArray[Math.floor(Math.random() * letterArray.length)];
	    				g++;
		    		//time to start comparing user input vs computer random choice. 
			    		if (userGuess.textContent === computerChoice.textContent) {
			    			w = parseInt(w) + 1;
			    		} else {
			    			l = parseInt(l) + 1;
			    		}
			    	
			    	//displaying the results
			    	var html =
			           "<br><p>wins: " + w + "</p>" +
			           "<p>losses: " + l + "</p>" +
			           "<p>Guesses: " + g + "</p>";
			        document.querySelector("#display").innerHTML = html;
			        // g = parseInt(g) + 1;
	    	}
	    }
