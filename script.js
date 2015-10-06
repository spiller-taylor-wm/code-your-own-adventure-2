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
var storyBob = [ "Bob has been living on a plain full of horses his entire life. The others would tease him and ask him who had stabbed a spike through his skull. He has created a shop of magical potions to help him support his young daughter, who is dying of Leukemia. Now he has just heard news of his best friend Steve's newborn child.",
	"While cleaning the shop, Bob hears an intruder and hides in the closet.",
	"He emerges to see Steve rifling through his collection of potions and mumbling about grapes. Steve seems relieved to see Bob and asks for his help in curing his son Grape Dog because he is allergic to his grapes. They must venture into the Evil Forest to find a magical beet root.",
	"While in the forest, Bob hears his name being called. He wanders until he comes across a young unicorn cloaked in a cape. The young woman tells him that he must choose either a red or a blue bag. The red will be filled with dark magic that will allow him to become fabulously wealthy and cure his daughter of her disease. The blue bag will give him the ability to steal money from the poor, but he will be unable to stop himself.", "The dark magic makes him a slave to the hooded figure who is the Evil Queen in disguise. He spends his days slowly working to death. He is never allowed to see his daughter, although all the money goes to her care. He will never know if she survived."
];
var errorBob = ["Bob wanders into the cold snowy forest. While en route to his closest friend's house, is distracted by the sound of distant crying. Fearing it may be another child in need like his beloved daughter, he rushes towards it. After this moment of brief panic and stupid bravery, Bob begins to realize that he is hopelessly lost. His body was found frozen to death a few days later.",
	"Bob becomes so captivated by his fear of the outside world that he remains in the closet until he dies.",
	"The Evil Queen bursts into Bob's shop wondering where Steve is. When Bob does not reveal what he knows, the Nice Queen kills him.",
	"Bob feels so guilty while stealing from the poor that he gives his daughter away to Steve and retreats into the forest to never be seen again."];
var storyKevin = [["Princess Kevin is the Nice land, born to the Nice Queen and King. But one day, like everything must, the beloved King died. Due to loss of the beloved King both the Queen and Kingdom was a mess. The country finally became stable once the queen got remarried and again became happy. Everyone was in bliss at this new golden age of peace, but not Princess Kevin, who knew the truth behind her mother's happiness. The Nice Queen was poisoned by her new husband and was now evil. Now the princess is determined to save her mother with the potion of 1,000 laughs", "Princess Kevin Goes to the village and is chased by the Nice Queen. She must escape.", "Ambushed by Steve and Grape Dog, Princess Kevin goes into a panic."]];
var errorKevin = ["She was found by the Nice Queen. Like a majestic Queen of Hearts, she declared: off with her head. ", "She was found by the Nice Queen. Like a majestic Queen of Hearts, she declared: off with her head.", "Like a coward, Princess Kevin runs away from the store straight into traffic."];
var storySteve = ["Steve is a magical unicorn. He was newly married to his wife Sneck. Sneck fell pregnant shortly after. But she didn't know who was the father. The other possible father was Davey the wolf.",
	"Steve and the wolf spent many hours rap battling. Steve came out victorious. CONGRATULATIONS! You won the rap battle! You're wife gave birth to a Grape dog. To your dismay it wasn't your child and Sneck was very confused on who the father was. But you still looked at the child as it was your own. But as soon as you held the baby in your arms he started to seize up. The doctor quickly informed you that the child just born has a rare medical condition where he is allergic to the fruit he grows on his body. He is shocked to hear his new born child now only has a few months to live. His only hope is to find Princess Kevin and hope she has a cure.",
	"Steve searched the village for hours. He gave up on his search of the wanted princess and decided he was going to see his best friend bob. To his luck and also his disadvantage he found princess kevin robbing his best friends store.",
	"Steve fought her long and hard, but it was no match for the Princess. She saw the fear in steve's eyes and decided to give him mercy. 'What do you want citizen' Princess Kevin asks steve as he tries to regain his footing. Steve explains his situation to kevin and she offers to help him get the cure. He informs him that their are two places that would have the cure",
	"Steve, Bob , and Kevin travel the 20 miles to the castle to find an army of guards outside the door.",
	"You made it pass the guards. After making it passed the Guards you come face to face with too doors.",
	"The door lead up to Nice queens room where you come face to face with her.",
	"Grape dog ended up throwing himself at the queen. She chocked on his graped and ended up exploding. You won!"
];
var errorSteve =["Steve ran into the Nice Queen who ended up trapping him in her jail forever.",
	"OH NO!! The nice queen followed Steve from his house and was very threatened by his child. She beheaded him in rage and in Steve's grieving state he attacked the Nice Queen. She ended his life in 2 seconds. You must have bad luck. ",
	"Steve ran straight into the middle of a street fight and ended up getting beat to death.",
	"You ran into nice queen on the way their and died in a evil spell. ",
	"You were over powered and killed in the line of fire",
	"The door lead to the basement where you were imprisoned and ended up giving your life up to save your son.",
	"You got captured by the queen and killed. "
];

/**
* Each panel will only have one question. 
* A question is not needed when the user makes and error and dies.
*/
var questionBob = ["Does Bob continue to take care of his shop, or does he visit his friend Steve?" ,
	"Does Bob stay in the closet, or does he venture out to see who it is?",
	"Does he help Steve or stay at the shop?",
	"Does he pick the red or the blue bag?",
	"Game Over"];
var questionKevin =["Does Princess Kevin going into the woods or the village to look for the potion?", "Does Princess Kevin go to the woods for safety or does she break in the unicorn horn repair shop?", "Does the Princess hold her ground and fight the Steve or will she be a baby and run away?"];
var questionSteve =["Do you want to attack him or run?","Do you want to go find the Princess in the woods or in the village?","Do you want to attack Princess Kevin or run?","Do you want to have Steve go to the hospital or do you want him to go to the heavily guarded castle and sneak into Nice queen's bed room?", "Do you want to attack the guards? Or, do you want to sneak around them? ","Do you want to go to the left door or the right one?","Do you want to attack nice queen or run?", "doge won this for you man"
	];

/**
* Arrays holding the text for the buttons.
* The arrays are nested. Each panel has an array with position 0 being an array, and position 1 being a string.
* Ex: for each panel [ ["Button 1 text", "Button 2 text"], "first/second/last"]
* The string indicates which button should lead to the next question, the first or the second. 
* If You are on the last panel, instead of writing second or first, but 'last' or any arbitrary string. This will signal the end of the game.
*/
var buttonBob = [ [["Stay at the Shop", "Visit Steve"], "first" ],
	[["Stay Hidden", "Go Out"], "second"],
	[["Help Steve", "Stay at the shop"], "first"],
	[["Red", "Blue"], "second"]
];
var buttonKevin = [[["Into the Woods", "Into the Village"], "second"],[["Break into the Store","Go to the Woods"],"first"],[["Stay and Fight Steve the Unicorn", "Run Away"], "First"]];
var buttonSteve = [
	[  [ "attack", "run"  ], "first"],
	[  [ "Woods", "Village"  ], "second"   ],
	[  [ "attack", "run"  ], "first"   ],
	[  [ "castle", "hospital"  ], "first"   ],
	[  [ "sneak", "attack"  ], "first"   ],
	[  [ "left", "right"  ], "first"   ],
	[  [ "attack", "run"  ], "first"],
	[  ["Great", "Game"], "end"   ]
];

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
            document.getElementById("storyText").innerHTML = storyKevin[panelNumber];
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
            document.getElementById("storyText").innerHTML = storySteve[panelNumber];
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



