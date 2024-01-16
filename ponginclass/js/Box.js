class Box {
    constructor()
    {
        this.x = 100
        this.y = 100
        this.w = 100
        this.h = 100
        this.color = `rgb(255,0,255)`
        this.vx = 5
        this.vy = 0
    }
    move()
    {
        this.x += this.vx
        this.y += this.vy
    }
    draw()
    {
        ctx.fillStyle = this.color   //color we want to use when we draw
        ctx.fillRect(this.x,this.y,this.w,this.h) //x,y,width,height
    }
}