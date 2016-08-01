
// Global variables ...so many oooooo
var options = ["snake","lion","jackal","chipmunk","wolf","cat","porcupine","monkey","donkey","goat","elephant","bear","rhino"];
var TOTALGUESS=8;
var i = 0;
var guess = 0;
var guessCount=0;
var ary;
var answer = new Array(10);
var userKeys=[];
var userGuessFound=0;
var gameReset = 0;
var userGuess;
var computerGuess="";
var firstKeyIgnored=0
var totalWins=0;
var totalLoss=0;
 



function resetGame()
{
   //location.reload();
	computerGuess = options[Math.floor(Math.random()*options.length)];
    answer = new Array(computerGuess.length)
    ary=Array.from(computerGuess);
    resetAnswer(computerGuess.length);
	document.getElementById("guess").innerHTML = "Number of guesses allowed : " + TOTALGUESS + "  <br><br>" + answer.join(" ") ;
	document.getElementById("hangman").innerHTML = "<img src=" + "\"assets/images/hangman0.gif\"" + ">";
	document.getElementById("result").innerHTML = "Your wins : "+totalWins  +" Your losses :"+ totalLoss+"<br>";
	userGuessFound=0;
	userKeys=[];

}

// Captures Key Clicks using event handler
function resetAnswer(count)
{
	for(i=0;i<count;i++) 
    	{
    		answer[i]='_';
    	}
}

 
document.onkeyup = function(event) {
		
        // Determines which exact key was selected. Make it lowercase
    
     var imageStr;
    if ( event.code == "Space")
    {
        
        resetGame();
        gameReset = 1;

    }

    else  if ( gameReset )
    {
            
       if (! userGuessFound )
        {
    	guessCount++;	
        }
        var rnd = Math.floor(Math.random()*99999);
        imageStr= "<img src=" + "\"assets/images/hangman" + guessCount+".gif?"+rnd + "\""+">" ;
        userGuessFound =0;
        userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        userKeys.push(userGuess);
        for(i=0;i<computerGuess.length;i++) 
        	{
        		if ( ary[i] == userGuess)
        		{
        			answer[i]= userGuess;
        			userGuessFound = 1;
        		}
        	}
    		// if all the slots are filled in answer, reset everything
		if ( answer.indexOf("_") == -1 )
		{
			document.getElementById("guess").innerHTML = answer.join(" ") + "<br> You guessed it right, You are a winner" ;
			totalWins++;
			gameReset = 0;
			guessCount =0;
			
		}
		else
		{
		document.getElementById("guess").innerHTML =  " Number of guesses left :" + ( TOTALGUESS - guessCount ) +"         You guessed " +userKeys.join(" ")  +"<br><br> " + answer.join(" ");
		}
    		

        if ( guessCount == TOTALGUESS )
        {
        	document.getElementById("guess").innerHTML =  ary.join(" ")+ "<br><br> Sorry the Game is Over, You Lost!! " ;
        	document.getElementById("hangman").innerHTML = imageStr;
            totalLoss++;
        	guessCount =0;
        	gameReset=2;
        	
        	
        }
        else if ( ! userGuessFound)
        {

        	document.getElementById("hangman").innerHTML = imageStr;
             
        } 
    	 if ( gameReset == 2)
    	{
    		document.getElementById("hangman").innerHTML = "<img src=" + "\"assets/images/hangman.gif?"+ rnd + "\""+">" ;
    		gameReset=0;
    		
    	}
    }
      
}
