/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
document.addEventListener('DOMContentLoaded', function() {
    var optionsHead = document.querySelector('#options h2');

    optionsHead.addEventListener('click', function() {
        var sidesDiv = document.querySelector('.sides');
        sidesDiv.classList.toggle('hidden');
    });
});

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
//FILL COLOR
var fill = document.querySelectorAll('.fill')

for(let i=0; i <player.length; i++){
    fill[i].addEventListener('input', fillChoose)
    function fillChoose(e) {
        player[i].fill = e.target.value
        pad[i].fill = e.target.value
    }
}

//STROKE COLOR
var stroke = document.querySelectorAll('.stroke')

for(let i=0; i <player.length; i++){
    stroke[i].addEventListener('input', strokeChoose)
    function strokeChoose(e) {
        player[i].stroke = e.target.value
        pad[i].stroke = e.target.value
    }
}

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
for(let i=0; i<player.length; i++)
{
    //UP
    function KeyboardUp(e){
        player[i].keys.u = e.target.value
    }
    var keyUp = document.querySelectorAll('.u')
    keyUp[i].addEventListener('input', KeyboardUp)

    //DOWN
    function KeyboardDown(e){
        player[i].keys.d = e.target.value
    }
    var keyDown = document.querySelectorAll('.d')
    keyDown[i].addEventListener('input', KeyboardDown)

    //STRAIGHT
    function Straight(e){
        player[i].keys.s = e.target.value
    }
    var keyStraight = document.querySelectorAll('.s')
    keyStraight[i].addEventListener('input', Straight)
}
for(let i=0; i<player.length; i++) {
    keyUp[i].addEventListener('focus',e=>currentState='pause')
    keyDown[i].addEventListener('focus',e=>currentState='pause')
    keyStraight[i].addEventListener('focus',e=>currentState='pause')
}