var opt = document.querySelector("#options h2")
opt.addEventListener("click", ShowHide)

function ShowHide()
{
    var x = document.querySelector(".sides")
    x.classList.toggle("hidden")
}



var fill = document.querySelectorAll(".fill")
for (let i=0; i < player.length; i++)
{
    fill[i].addEventListener("input", ColorPicker)

    function ColorPicker(e)
    {
        player[i].fill = e.target.value
        pad[i].fill = e.target.value
    }
}

var stroke = document.querySelectorAll(".stroke")
for (let i=0; i < player.length; i++)
{
    stroke[i].addEventListener("input", ColorPicker)

    function ColorPicker(e)
    {
        player[i].stroke = e.target.value
        pad[i].stroke = e.target.value
    }
}



var fill = document.querySelectorAll(".fill")
for (let i=0; i < o.length; i++)
{
    fill[i].addEventListener("input", ColorPicker)

    function ColorPicker(e)
    {
        o[i].fill = e.target.value
    }
}

for(let i=0; i < player.length; i++)
{ 
    function KeyboardUp(e)
    {
        player[i].keys.u = e.target.value
    }

    var keyup = document.querySelectorAll(".u")
    keyup[i].addEventListener("input", KeyboardUp)
    
    function KeyboardDown(e)
    {
        player[i].keys.d = e.target.value
    }

    var keydown = document.querySelectorAll(".d")
    keydown[i].addEventListener("input", KeyboardDown)
    
    function Straight(e)
    {
        player[i].keys.s = e.target.value
    }
    var straight = document.querySelectorAll(".s")
    straight[i].addEventListener("input", Straight)

    keyup[i].addEventListener("focus", e=>currentState="pause")
    keydown[i].addEventListener("focus", e=>currentState="pause")
    straight[i].addEventListener("focus", e=>currentState="pause")
}
    
/*for(let i=0; i < player.length; i++)
{
    keyup[i].addEventListener("focus", e=>currentState="pause")
    keydown[i].addEventListener("focus", e=>currentState="pause")
    straight[i].addEventListener("focus", e=>currentState="pause")
}*/