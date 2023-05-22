const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d"); //context
canvas.style.backgroundColor = "green";

// TO DO: fix these so they can be customized in the HTML rather than hardcoded values 
canvas.width = 500
canvas.height = 500
// canvasWidth = 500
// canvasHeight = 500

const mouse = {
    x: 0,
    y: 0
}

class ShakerContainer {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    draw() {
        ctx.beginPath();
        ctx.lineWidth = 10
        ctx.stokeStyle = black;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
        ctx.closePath();
    }
    update() {
        this.draw()
    }
}

const yellow = "#fad881"
const black = "#000000"

let containerWidth = 175
let containerHeight = 300
var isClicked = false

//TO DO: fix bug where container won't center to canvas
var container = new ShakerContainer(((canvas.width / 2) - (containerWidth / 2)), undefined, containerWidth, containerHeight)
container.draw()


addEventListener('mousedown', () => {
    console.log("click!")
    isClicked = true
})

addEventListener('mouseup', () => {
    console.log("no click!")
    isClicked = false
})

addEventListener('mousemove', (event) => {
    if (isClicked) {
        mouse.x = event.clientX - canvas.offsetLeft - (containerWidth / 2)
        mouse.y = event.clientY - canvas.offsetTop - (containerHeight / 2)
        console.log("moving!" + mouse)
    }
})

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    container.x = mouse.x;
    container.y = mouse.y;
    container.update();
}
animate()
