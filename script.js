/**
 * Created by session2 on 9/30/15.
 */

var character;
var answer;
var startGame = function(name) {
    switch(name){
        case 'Princess kevin':
            storyKevin();
            break;
        case 'steve':
            storySteve();
            break;
        case 'Bob':
            storyBob();
            break;

        default:

            break;
    }
};

var storyKevin = function() {


};

var storySteve = function() {
prompt("Steve is a magical unicorn. He was newly married to his wife Sneck. Sneck fell pregnant shortly after. But she didn't know who was the father. The other possible father was Davey the wolf. Do you want to attack him or run?  ");

    if(answer === "attack"){
        alert("Steve and the wolf spent many hours rap battling. Steve came out victorious.");
    }
    else if (answer === "run"){
        alert("Steve ran into the Nice Queen who ended up trapping him in her jail forever.");
    }
    else {
        alert("Try again and pick a choice.");
    }

prompt("CONGRATULATIONS! You won the rap battle! You're wife gave birth to a Grape dog. To your dismay it wasn't your child and Sneck was very confused on who the father was. But you still looked at the child as it was your own. But as soon as you held the baby in your arms he started to seize up. The doctor quickly informed you that the child just born has a rare medical condition where he is allergic to the fruit he grows on his body. He is shocked to hear his new born child now only has a few months to live. His only hope is to find Princess Kevin and hope she has a cure. Do you want to go find the Princess in the woods or in the village?")

    if(answer === "Woods"){
        alert("OH NO!! The nice queen followed Steve from his house and was very threatened by his child. She beheaded him in rage and in Steve's grieving state he attacked the Nice Queen. She ended his life in 2 seconds. You must have bad luck. ");
    }
    else if (answer === "Village"){
        alert("Steve searched the village for hours. He gave up on his search of the wanted princess and decided he was going to see his best friend bob. To his luck and also his disadvantage he found princess kevin robbing his best friends store.");
    }
    else {
        alert("Try again and pick a choice.");
    }

prompt("Do you want to attack Princess Kevin or run?");
    if(answer === "attack"){
        alert("Steve fought her long and hard, but it was no match for the Princess. She saw the fear in steve's eyes and decided to give him mercy.");
    }
    else if (answer === "run"){
        alert("Steve ran straight into the middle of a street fight and ended up getting beat to death.");
    }
    else {
        alert("Try again and pick a choice.");
    }

prompt("'What do you want citizen' Princess Kevin asks steve as he tries to regain his footing. Steve explains his situation to kevin and she offers to help him get the cure. He informs him that their are two places that would have the cure. Do you want to have Steve go to the hospital or do you want him to go to the heavily guarded castle and sneak into Nice queen's bed room? (Type Castle or Hospital) ");
    if(answer === "castle"){
        alert("Great Choice");
    }
    else if (answer === "hospital"){
        alert("You ran into nice queen on the way their and died in a evil spell. ");
    }
    else {
        alert("Try again and pick a choice.");
    }


prompt("Steve, Bob , and Kevin travel the 20 miles to the castle to find an army of guards outside the door. Do you want to attack the guards? Type: attack. Or, do you want to sneak around them? Type: sneak.");
    if(answer === "sneak"){
        alert("You made it pass the guards");
    }
    else if (answer === "attack"){
        alert("You were over powered and killed in the line of fire");
    }
    else {
        alert("Try again and pick a choice.");
    }

prompt("After making it passed the Guards you come face to face with too doors? Do you want to go to the left door or the right one?");
    if(answer === "Left"){
        alert("The door lead up to Nice queens room where you come face to face with her.");
    }
    else if (answer === "Right"){
        alert("The door lead to the basement where you were imprisoned and ended up giving your life up to save your son.");
    }
    else {
        alert("Try again and pick a choice.");
    }

prompt("Do you want to attack nice queen or run");
    if(answer === "Attack"){
        alert("Grape dog ended up throwing himself at the queen. She chocked on his graped and ended up exploding. You won!");
    }
    else if (answer === "Run"){
        alert("You got captured by the queen and killed. ");
    }
    else {
        alert("Try again and pick a choice.");
    }


};

var storyBob = function() {


};

var storyQueen = function() {


};