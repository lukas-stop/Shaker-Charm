import { randomColor, randomIntFromRange } from "./helperfunctions.js";

// ----------------------------------- //
//           KONVA TESTING             //
// ----------------------------------- //


var width = document.getElementById('canvasContainer').offsetWidth;
var height = document.getElementById('canvasContainer').offsetHeight;

var stage = new Konva.Stage({
    container: 'canvasContainer',
    width: width,
    height: height,
});

var shapesLayer = new Konva.Layer();
var group = new Konva.Group({
    draggable: true,
});

//these vary depending on the image uploaded, else use default values
var shakerContainerWidth = 300
var shakerContainerHeight = 400

var shakerContainer = new Konva.Rect({
    x: 10,
    y: 10,
    width: shakerContainerWidth,
    height: shakerContainerHeight,
    stroke: 'black',
    strokeWidth: 4,
})
group.add(shakerContainer)

var charmWidth = 25
var charmHeight = 25
var charm = new Konva.Rect({
    x: shakerContainerWidth / 2,
    y: shakerContainerHeight / 2,
    width: charmWidth,
    height: charmHeight,
    fill: randomColor(false),
    stroke: 'black',
    strokeWidth: 3,
});

charm.velocity = {
    x: 0,
    y: 0,
}
group.add(charm)

group.on('dragstart', function () {
    charm.velocity = {
        x: 0,
        y: 0,
    };
    anim.start();
})

group.on('mousedown', function () {
    anim.stop();
});

group.on('mouseover', function () {
    document.body.style.cursor = 'pointer';
});

group.on('mouseout', function () {
    document.body.style.cursor = 'default';
});

shapesLayer.add(group);
stage.add(shapesLayer);


// // ----------------------------------- //
// //        VARIABLES & CLASSES          //
// // ----------------------------------- //

// class ShakerContainer {
//     constructor(x, y, w, h) {
//         this.x = x
//         this.y = y
//         this.w = w
//         this.h = h
//     }

//     draw() {
//         ctx.beginPath();
//         ctx.lineWidth = 10
//         ctx.stokeStyle = "#000";
//         ctx.rect(this.x, this.y, this.w, this.h);
//         ctx.stroke();
//         ctx.closePath();
//     }
//     update() {
//         this.draw()
//     }
// }

// class CharmPiece {
//     constructor(x, y, w, h, color) {
//         this.x = x
//         this.y = y
//         this.w = w
//         this.h = h
//         this.color = color
//         this.dx = 0.02 //velocity
//         this.dy = 2
//     }
//     update() {
//         this.draw()
//     }
//     draw() {
//         //TO DO: update this so that it the user can specify the size of the inner charms
//         ctx.beginPath();
//         ctx.rect(this.x, this.y, this.w, this.h);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//         ctx.closePath();
//     }

// }

// // Container Setup ------------------------------------
// let containerWidth = 175
// let containerHeight = 300
// var isClicked = false

// const mouse = {
//     x: (canvas.width / 2) - (containerWidth / 2),
//     y: (canvas.height / 2) - (containerHeight / 2)
// }

// var container = new ShakerContainer(mouse.x, mouse.y, containerWidth, containerHeight)



// //TO DO: final adjustments for buffer
// //adding/subtracting 20 acts like a buffer so that it doesn't go over the edges (this needs to be tweaked)

// // ----------------------------------- //
// //        FUNCTIONS & LISTENERS        //
// // ----------------------------------- //
// addEventListener('mousedown', () => {
//     //console.log("click!")
//     isClicked = true
// })

// addEventListener('mouseup', () => {
//     //console.log("no click!")
//     isClicked = false
// })

// addEventListener('mousemove', (event) => {
//     if (isClicked) {
//         mouse.x = event.clientX - canvas.offsetLeft - (containerWidth / 2)
//         mouse.y = event.clientY - canvas.offsetTop - (containerHeight / 2)
//         //console.log("moving!" + mouse)
//     }
// })

// // Charm Piece Setup ------------------------------------

// //TO DO: combine w functions in formControls.js (? -> currently seperate for organization reasons)
// const addCharmBTN = document.getElementById("addCharmBtn")
// const subtractCharmBTN = document.getElementById("subtractCharmBtn")
// const charmCount = document.getElementById("charmCountInput")
// let innerCharms = []

// function createInnerCharm() {
//     let charmWidth = 25
//     let charmHeight = 25
//     let charmX = randomIntFromRange((((canvas.width - containerWidth) / 2)) + 20, (containerWidth + ((canvas.width - containerWidth) / 2)) - 20)
//     let charmY = randomIntFromRange((((canvas.height - containerHeight) / 2)) + 20, (containerHeight + ((canvas.height - containerHeight) / 2)) - 20)
//     const color = randomColor(false)
//     return new CharmPiece(charmX, charmY, charmWidth, charmHeight, color)
// }

// // Add a charm
// addCharmBTN.addEventListener("click", () => {
//     innerCharms.push(createInnerCharm())
// })

// // Remove a charm
// subtractCharmBTN.addEventListener("click", () => {
//     innerCharms.pop()
// })

// // Reset Container
// const resetContainerBTN = document.getElementById("resetContainerBtn")
// resetContainerBTN.addEventListener("click", () => {
//     requestAnimationFrame(animate)
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     mouse.x = (canvas.width / 2) - (containerWidth / 2)
//     mouse.y = (canvas.height / 2) - (containerHeight / 2)
//     container.x = mouse.x;
//     container.y = mouse.y;
//     container.update();
// })

// // Reset All
// const resetAllBTN = document.getElementById("resetAll")
// resetAllBTN.addEventListener("click", () => {
//     innerCharms = []
//     document.getElementById("addImageContainer").innerHTML = ''
//     requestAnimationFrame(animate)
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     mouse.x = (canvas.width / 2) - (containerWidth / 2)
//     mouse.y = (canvas.height / 2) - (containerHeight / 2)
//     container.x = mouse.x;
//     container.y = mouse.y;
//     container.update();
// })

// // Shake Container
// const shimmyContainerBTN = document.getElementById("shimmyBtn")
// shimmyContainerBTN.addEventListener("click", () => {
//     console.log("boop") //debug
// })


// function animate() {
//     requestAnimationFrame(animate)
//     ctx.clearRect(0, 0, canvas.width, canvas.height)

//     //TO DO: BUGFIX: mouse going off screen sometimes leaves whitespace between canvas border and container
//     //if mouse is within range of canvas
//     // if ((mouse.x < (canvas.width - container.w) && mouse.x > 0)) {
//     //     container.x = mouse.x
//     // }
//     // if (mouse.y < (canvas.height - container.h) && mouse.y > 0) {
//     //     container.y = mouse.y
//     // }
//     //else we're on an edge

//     //TO DO: take into account the container's current x and y (this is so it can update as container moves)
//     // innerCharm.x = container.x
//     // innerCharm.y = container.y
//     innerCharms.forEach(innerCharm => {
//         innerCharm.update(); //draw charms before container for proper layering
//     })
//     container.update()

// }
// animate()