var c = document.querySelector(`canvas`);   //find an element on a page and use that element
var ctx = c.getContext(`2d`)
var timer = setInterval(main, 1000/60); //60fps

var ball = [new Box(), new Box()]

ball[0].color = `red`
ball[1].y = 300

function main() {

    ctx.clearRect(0,0,c.width,c.height)

    for(let i=0; i<ball.length;i++)
    {
        ball[i].move()
        ball[i].draw()
    }


}