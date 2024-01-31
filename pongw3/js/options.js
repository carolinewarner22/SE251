document.addEventListener('DOMContentLoaded', function() {
    var optionsHead = document.querySelector('#options h2');

    optionsHead.addEventListener('click', function() {
        var sidesDiv = document.querySelector('.sides');
        sidesDiv.classList.toggle('hidden');
    });
});
//FILL COLOR
var fill = document.querySelectorAll('.fill')

for(let i=0; i <player.length; i++){
    fill[i].addEventListener('input', fillChoose)
    function fillChoose(e) {
        player[i].fill = e.target.value
        pad[i].fill = e.target.value
    }
}


/*for(let i=0; i <o.length; i++){
    fill[i].addEventListener('input', fillChoose)
    function fillChoose(e) {
        o[i].fill = e.target.value
    }
}*/

var range = document.querySelectorAll('.slider')
for(let i=0; i < o.length; i++) {
    range[i].addEventListener('input', pickSize)
    function pickSize(e) {
        o[2].w = parseInt(e.target.value)
        o[2].h = parseInt(e.target.value)
        
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