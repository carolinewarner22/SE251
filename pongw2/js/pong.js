//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

var player = []
player[0] = new Player()
player[1] = new Player()

var pad = []
pad[0] = player[0].pad
pad[1] = player[1].pad

//global friction variable
var fy = .97

pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2

pad[1].w = 20
pad[1].h = 150
pad[1].x = c.width - pad[1].w/2
pad[1].dir = -1

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `white`

var scores = document.querySelectorAll(`#score div`)
console.log(scores)


function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)

    if(keys[`w`])
    {
       pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }

    if(keys[`8`])
    {
        pad[1].vy += -pad[1].force
    }

    if(keys[`2`])
    {
        pad[1].vy += pad[1].force
    }

    //ball movement
    ball.move()

    //ball collision 
    if(ball.x < 0 + ball.w/2)
    {
        ball.x = c.width/2
        ball.y = c.height/2
        player[1].score += 1
    }
    if(ball.x > c.width - ball.w/2)
    {
        ball.x = c.width/2
        ball.y = c.height/2
        player[0].score += 1
    }

    console.log(player[0].score, `|`, player[1].score)

    if(ball.y < 0 + ball.h/2)
    {
        ball.y = 0 + ball.h/2 
        ball.vy = -ball.vy
    }
    if(ball.y > c.height - ball.h/2)
    {
        ball.y = c.height - ball.h/2
        ball.vy = -ball.vy
       
    }
    for (let i=0; i < pad.length; i++) {

        pad[i].vy *= 0.8

        pad[i].move()

        if(pad[i].y < 0+pad[i].h/2)
        {
            pad[i].y = 0+pad[i].h/2
        }

        if(pad[i].y > c.height-pad[i].h/2)
        {
            pad[i].y = c.height-pad[i].h/2
        }

        if(ball.collide(pad[i]))
        {
            ball.x = pad[i].x + (pad[i].w/2 + ball.w/2)*(pad[i].dir)
            ball.vx = -ball.vx;
        }

        scores[i].innerHTML = `<p>Player ${i + 1}: ${player[i].score}</p>`
        
        pad[i].draw()
    }

    ball.draw()
}
