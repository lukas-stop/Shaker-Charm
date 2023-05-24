import { randomColor, randomIntFromRange } from "./helperfunctions.js";

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d"); //context
canvas.style.backgroundColor = "#d3d3d3";

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
        ctx.stokeStyle = "#000";
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
        ctx.closePath();
    }
    update() {
        this.draw()
    }
}

class CharmPiece {
    constructor(x, y, w, h, color) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.color = color
    }
    draw() {
        //TO DO: update this so that it the user can specify the size of the inner charms
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    update() {
        this.draw()
    }
}

// Container Setup ------------------------------------
let containerWidth = 175
let containerHeight = 300
var isClicked = false

const mouse = {
    x: (canvas.width / 2) - (containerWidth / 2),
    y: (canvas.height / 2) - (containerHeight / 2)
}

var container = new ShakerContainer(undefined, undefined, containerWidth, containerHeight)

// Charm Piece Setup ------------------------------------
let charmWidth = 25
let charmHeight = 25
let charmX = randomIntFromRange((canvas.width - containerWidth) - 10, containerWidth + 10)
let charmY = randomIntFromRange((canvas.height - containerHeight) - 10, containerHeight + 10)

var innerCharm = new CharmPiece(charmX, charmY, charmWidth, charmHeight, randomColor(false))

// ----------------------------------- //
//        FUNCTIONS & LISTENERS        //
// ----------------------------------- //
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
    container.x = mouse.x
    container.y = mouse.y
    //innerCharm.x = container.x + 10 // the +10 is to add padding so its not directly against the side
    //innerCharm.y = container.y + 10

    innerCharm.update() //draw charms before container for proper layering
    container.update()
}

animate() 
