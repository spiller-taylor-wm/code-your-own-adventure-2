/**
 * Created by session2 on 9/30/15.
 */

var character;

var startGame = function(name) {
    switch(name){
        case 'Princess Kevin':
            storyKevin();
            break;
        case 'Bob':
            storyBob();
            break;
        case 'Nice Queen':
            storyQueen();
            break;
        default:
            break;
    }
};

var storyKevin = function() {

};

var storyBob = function() {
    console.log("Bob ");
    var answer = prompt("Does Bob continue to take care of his shop, or does he visit his friend Steve?", "Shop or Steve").toLowerCase();
    switch(answer){
        case 'shop':
            confirm("While sweeping the floors that afternoon, Bob hears the sound of glass shattering.");
            answer = prompt("Does Bob hide or search for the source?", "Hide or Search").toLowerCase();
            if(answer === "hide")
            {
                confirm("Bob peers out from the supply closet to see the royal Princess Kevin frantically searching through his bottles of potions. Many shatter and break in the process. ");
                confirm('Suddenly Steve breaks through the door. "I need your help, Steve!" He calls. "I need your help in the castle."');

            } else if(answer === "search") {
                confirm("Standing defenseless in the middle of his shop, Bob catches a glimpse of long purple and yellow striped hair. He slowly strides forward to see the lovely Princess Kevin rifling through his stock of potions. A flash of light is all he sees as he freezes into a block of ice.");
            }
            break;
        case 'steve':

            break;
        default:
    }
};

var storyQueen = function() {

};