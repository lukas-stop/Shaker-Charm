const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d"); //context
canvas.style.backgroundColor = "green";

const canvasDimensions = {
    width: canvas.width,
    height: canvas.height
}

// ----------------------------------- //
//        VARIABLES & CLASSES          //
// ----------------------------------- //

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

const mouse = {
    x: (canvas.width / 2) - (containerWidth / 2),
    y: (canvas.height / 2) - (containerHeight / 2)
}

var container = new ShakerContainer(undefined, undefined, containerWidth, containerHeight)
container.draw()

// ----------------------------------- //
//        FUNCTIONS & LISTENERS        //
// ----------------------------------- //
addEventListener('mousedown', (event) => {
    console.log("click!")
    isClicked = true
})

addEventListener('mouseup', () => {
    console.log("no click!")
    isClicked = false
})

addEventListener('mousemove', (event) => {
    console.log("moving!" + mouse)
    if (isClicked) {
        mouse.x = event.clientX - canvas.offsetLeft - (containerWidth / 2)
        mouse.y = event.clientY - canvas.offsetTop - (containerHeight / 2)
    }
})


// Button Functions

const resetContainerBTN = document.getElementById("resetButton")

resetWidgetBTN.addEventListener("click", () => {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mouse.x = (canvas.width / 2) - (containerWidth / 2)
    mouse.y = (canvas.height / 2) - (containerHeight / 2)
    container.x = mouse.x;
    container.y = mouse.y;
    container.update();
})

const shimmyContainerBTN = document.getElementById("shimmyButton")

// loop 
function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    container.x = mouse.x;
    container.y = mouse.y;
    container.update();
}
animate()