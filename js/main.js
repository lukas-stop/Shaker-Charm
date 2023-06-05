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
        //TO DO: keep container from going off side of screen
        //uncomment when shimmy button becomes active
        // if (this.x + this.w > 500 || this.x - this.w < 0) {
        //     this.dx= -this.dx; 
        // }
        // if (this.y + this.h > 500 || this.y - this.h < 0) {
        //     this.dy= -this.dy; 
        // }
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
        this.dx = 0.02 //velocity
        this.dy = 2
    }
    update() {
        this.draw()
        //if cube is outside of max range, make it go down
        // if (this.y + this.h > containerHeight + ((canvas.height - containerHeight) / 2)) {
        //     this.dy = -this.dy * 0.7; //0.7 is friction
        // }
        // else {
        //     this.dy += 0.75; //add gravity (0.75)
        // }

        //TO DO: BUGFIX
        //friction is sometimes random??  why?? 
        // if (this.x + this.w + this.dx > ((containerWidth + ((canvas.width - containerWidth) / 2))) || this.x - this.w <= 0) {
        //     this.dx = -this.dx * (0.7 / 3); //reverse direction and add friction
        // }

        //this.x += this.dx;
        //this.y += this.dy;
        //this.draw()
    }
    draw() {
        //TO DO: update this so that it the user can specify the size of the inner charms
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
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

var container = new ShakerContainer(mouse.x, mouse.y, containerWidth, containerHeight)



//TO DO: final adjustments for buffer
//adding/subtracting 20 acts like a buffer so that it doesn't go over the edges (this needs to be tweaked)

// ----------------------------------- //
//        FUNCTIONS & LISTENERS        //
// ----------------------------------- //
addEventListener('mousedown', () => {
    //console.log("click!")
    isClicked = true
})

addEventListener('mouseup', () => {
    //console.log("no click!")
    isClicked = false
})

addEventListener('mousemove', (event) => {
    if (isClicked) {
        mouse.x = event.clientX - canvas.offsetLeft - (containerWidth / 2)
        mouse.y = event.clientY - canvas.offsetTop - (containerHeight / 2)
        //console.log("moving!" + mouse)
    }
})

// Charm Piece Setup ------------------------------------

//TO DO: combine w functions in formControls.js (? -> currently seperate for organization reasons)
const addCharmBTN = document.getElementById("addCharmBtn")
const subtractCharmBTN = document.getElementById("subtractCharmBtn")
const charmCount = document.getElementById("charmCountInput")
let innerCharms = []

function createInnerCharm() {
    let charmWidth = 25
    let charmHeight = 25
    let charmX = randomIntFromRange((((canvas.width - containerWidth) / 2)) + 20, (containerWidth + ((canvas.width - containerWidth) / 2)) - 20)
    let charmY = randomIntFromRange((((canvas.height - containerHeight) / 2)) + 20, (containerHeight + ((canvas.height - containerHeight) / 2)) - 20)
    const color = randomColor(false)
    return new CharmPiece(charmX, charmY, charmWidth, charmHeight, color)
}

// Add a charm
addCharmBTN.addEventListener("click", () => {
    innerCharms.push(createInnerCharm())
})

// Remove a charm
subtractCharmBTN.addEventListener("click", () => {
    innerCharms.pop()
})

// Reset Container
const resetContainerBTN = document.getElementById("resetContainerBtn")
resetContainerBTN.addEventListener("click", () => {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mouse.x = (canvas.width / 2) - (containerWidth / 2)
    mouse.y = (canvas.height / 2) - (containerHeight / 2)
    container.x = mouse.x;
    container.y = mouse.y;
    container.update();
})

// Reset All
const resetAllBTN = document.getElementById("resetAll")
resetAllBTN.addEventListener("click", () => {
    innerCharms = []
    document.getElementById("addImageContainer").innerHTML = ''
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mouse.x = (canvas.width / 2) - (containerWidth / 2)
    mouse.y = (canvas.height / 2) - (containerHeight / 2)
    container.x = mouse.x;
    container.y = mouse.y;
    container.update();
})

// Shake Container
const shimmyContainerBTN = document.getElementById("shimmyBtn")
shimmyContainerBTN.addEventListener("click", () => {
    console.log("boop") //debug
})


function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //TO DO: BUGFIX: mouse going off screen sometimes leaves whitespace between canvas border and container
    //if mouse is within range of canvas
    if ((mouse.x < (canvas.width - container.w) && mouse.x > 0)) {
        container.x = mouse.x
    }
    if (mouse.y < (canvas.height - container.h) && mouse.y > 0) {
        container.y = mouse.y
    }
    //else we're on an edge    

    //TO DO: take into account the container's current x and y (this is so it can update as container moves)
    // innerCharm.x = container.x
    // innerCharm.y = container.y
    innerCharms.forEach(innerCharm => {
        innerCharm.update(); //draw charms before container for proper layering 
    })
    container.update()

}
animate()