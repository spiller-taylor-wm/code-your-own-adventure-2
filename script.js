/**
 * Created by session2 on 9/30/15.
 * Sources for pictures: 
 * Bob: https://derpicdn.net/img/2013/6/28/359217/full.png
 * Princess Kevin: https://derpicdn.net/img/2013/6/7/342631/full.png
 * Steve: http://pre13.deviantart.net/b624/th/pre/i/2014/146/c/e/unicorn_noteworthy_by_vectorizedunicorn-d7ju47d.png
 * Evil Queen: http://img15.deviantart.net/3228/i/2014/334/5/6/unicorn_princess_twivine_sparkle_vector_by_sonicth1235-d889jqv.png
 * Grape Dog: 
 * Blank Space: https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Egypt_governorates_blank.png/597px-Egypt_governorates_blank.png
 *
 * Bob's Store: http://pre15.deviantart.net/1b98/th/pre/i/2013/227/2/7/at_the_vinyl_shop___background_by_darknessie-d6iaho3.jpg
 */

var character = "Bob";
var panelNumber = 0;
var answer;

/**
* Each panel has one block of storyline text.
* Incorrect paths taken are put in the error array.
*/
var storyBob = [ "Plot line 1", "Plot line 2", "Plot line 3" ];
var errorBob = ["no", "no2", "no3", "no4"];
var storyKevin = [];
var errorKevin = [];
var storySteve = [];
var errorSteve = [];

/**
* Each panel will only have one question. 
* A question is not needed when the user makes and error and dies.
*/
var questionBob = ["Does Bob continue to take care of his shop, or does he visit his friend Steve?" , "Question 2", "Question 3", "question 4"];
var questionKevin =[];
var questionSteve = [];

/**
* Arrays holding the text for the buttons.
* The arrays are nested. Each panel has an array with position 0 being an array, and position 1 being a string.
* Ex: for each panel [ ["Button 1 text", "Button 2 text"], "first/second/last"]
* The string indicates which button should lead to the next question, the first or the second. 
* If You are on the last panel, instead of writing second or first, but 'last' or any arbitrary string. This will signal the end of the game.
*/
var buttonBob = [ [ ["Stay at the Shop", "Visit Steve"], "first" ] , [["Button 2.1", "Button 2.2 True"], "second"] , [ ["Button 3.1 True", "Button 3.2"], "last"] ];
var buttonKevin = [];
var buttonSteve = [];

/**
 * Function to change the two paragraphs on the HTML page that display
 * both the storyline text and the question that the player must answer, 
 * the background pictures, and the button text.
 */
function nextPanel(){
			
    switch(character){
        case 'Bob':
            document.getElementById("storyText").innerHTML = storyBob[panelNumber];
            document.getElementById("questionText").innerHTML = questionBob[panelNumber];
			document.getElementById("button1").innerHTML = buttonBob[panelNumber][0][0];
			document.getElementById("button2").innerHTML = buttonBob[panelNumber][0][1];
			if(buttonBob[panelNumber][1].toLowerCase() === "first") {	
				//The first button is the correct path
				document.getElementById("button1").onclick = nextPanel;
				document.getElementById("button2").onclick = wrongAnswer;
			} else if(buttonBob[panelNumber][1].toLowerCase() === "second") {
				// The second button is the correct path
				document.getElementById("button2").onclick = nextPanel;
				document.getElementById("button1").onclick = wrongAnswer;
			} else {
				// Last panel
				
				document.getElementById("button1").onclick = restart;
				document.getElementById("button2").style.display = 'none';
				document.getElementById("button1").innerHTML = "Play Again";
			}
            break;

        case 'Kevin':
            document.getElementById("storyText").innerHTML = storyKevin[panelNumber][0];
            document.getElementById("questionText").innerHTML = questionKevin[panelNumber];
			document.getElementById("button1").innerHTML = buttonKevin[panelNumber][0][0];
			document.getElementById("button2").innerHTML = buttonKevin[panelNumber][0][1];
			if(buttonKevin[panelNumber][1].toLowerCase() === "first") {	
				//The first button is the correct path
				document.getElementById("button1").onclick = nextPanel;
				document.getElementById("button2").onclick = wrongAnswer;
			} else if(buttonKevin[panelNumber][1].toLowerCase() === "second") {
				// The second button is the correct path
				document.getElementById("button2").onclick = nextPanel;
				document.getElementById("button1").onclick = wrongAnswer;
			} else {
				// Last panel
				document.getElementById("button1").onclick = restart;
				document.getElementById("button2").style.display = 'none';
				document.getElementById("button1").innerHTML = "Play Again";
			}
            break;

        case 'Steve':
            document.getElementById("storyText").innerHTML = storySteve[panelNumber][0];
            document.getElementById("questionText").innerHTML = questionSteve[panelNumber];
			document.getElementById("button1").innerHTML = buttonSteve[panelNumber][0][0];
			document.getElementById("button2").innerHTML = buttonSteve[panelNumber][0][1];
			if(buttonSteve[panelNumber][1].toLowerCase() === "first") {	
				//The first button is the correct path
				document.getElementById("button1").onclick = nextPanel;
				document.getElementById("button2").onclick = wrongAnswer;
			} else if(buttonSteve[panelNumber][1].toLowerCase() === "second") {
				// The second button is the correct path
				document.getElementById("button2").onclick = nextPanel;
				document.getElementById("button1").onclick = wrongAnswer;
			} else {
				// Last panel
				document.getElementById("button1").onclick = restart;
				document.getElementById("button2").style.display = 'none';
				document.getElementById("button1").innerHTML = "Play Again";
			}
            break;
    }
    panelNumber ++;
};

function wrongAnswer(){
    switch(character){
        case 'Bob':
            document.getElementById("storyText").innerHTML = errorBob[panelNumber - 1];
            break;

        case 'Kevin':
            document.getElementById("storyText").innerHTML = errorKevin[panelNumber - 1];
            break;

        case 'Steve':
            document.getElementById("storyText").innerHTML = errorSteve[panelNumber - 1];
            break;

        default:
            break;
    }
	document.getElementById("questionText").innerHTML = "Game Over";
	document.getElementById("button1").innerHTML = "Play Again";
	document.getElementById("button2").style.display = 'none';
	document.getElementById("button2").innerHTML = "";
	document.getElementById("button1").onclick = restart;
};

/**
 * Function to start the game. It is called when the start button is clicked.
 * It changes the first picture to the main character and hides the other two pictures.
 * Then it calls the function to display the next panel.
 */
function startGame() {
	switch(character){
		case 'Bob':
			document.getElementById("imgCharacter1").src = "https://derpicdn.net/img/2013/6/28/359217/full.png";
			break;
		case 'Steve':
			document.getElementById("imgCharacter1").src = "http://pre13.deviantart.net/b624/th/pre/i/2014/146/c/e/unicorn_noteworthy_by_vectorizedunicorn-d7ju47d.png";
			break;
		case 'Kevin':
			document.getElementById("imgCharacter1").src = "https://derpicdn.net/img/2013/6/7/342631/full.png";
			break;
	}
	// Prevents character from changing
	document.getElementById("imgCharacter1").onclick = "";
	document.getElementById("imgCharacter2").onclick = "";
	document.getElementById("imgCharacter3").onclick = "";
	// Makes buttons visible
	document.getElementById("button1").style.visibility = 'visible';
	//Hides other characters
	document.getElementById("imgCharacter2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Egypt_governorates_blank.png/597px-Egypt_governorates_blank.png";
	document.getElementById("imgCharacter3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Egypt_governorates_blank.png/597px-Egypt_governorates_blank.png";
    nextPanel();
};

function restart(){
	location.reload();
	panelNumber = 0;
};

function characterClick() {
	
};

