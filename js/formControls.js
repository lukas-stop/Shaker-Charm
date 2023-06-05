// ------------------------------------------------ //
//        FOR ADDING CHARMS TO THE CONTAINER        //
// ------------------------------------------------ //

const addCharmBTN = document.getElementById("addCharmBtn")
const subtractCharmBTN = document.getElementById("subtractCharmBtn")
const charmCount = document.getElementById("charmCountInput")
const maxInnerCharms = 5 //change this to adjust the total charms inside container

// HTML to update image upload to change based off of current charm count
const ImageBtnHTML = "<label for=\"charmImgBtn\">Add an image: </label><input type=\"file\" id=\"charmImgBtn\" name=\"charmImgBtn\" /><br>"
let containerHTML = []

//Remove a charm -----------------
subtractCharmBTN.addEventListener("click", () => {
    if (Number(charmCount.value) > 0) {
        charmCount.value = Number(charmCount.value) - 1
        containerHTML.pop(ImageBtnHTML)

        //Probs a hacky way to do this, will clear the container then redisplay the current array of html
        document.getElementById("addImageContainer").innerHTML = ""
        document.getElementById("addImageContainer").innerHTML = containerHTML.join('')
    }
})

//Add a charm -----------------
addCharmBTN.addEventListener("click", () => {
    //temp limit to ensure things don't get crazy
    if (Number(charmCount.value) < maxInnerCharms) {
        charmCount.value = Number(charmCount.value) + 1
        containerHTML.push(ImageBtnHTML)
        document.getElementById("addImageContainer").innerHTML = containerHTML.join('')
    }
})

// Defaults to whatever was previously inputted on page load

window.addEventListener("load", () => {
    for (var i = 0; i < Number(charmCount.value); i++) {
        containerHTML.push(ImageBtnHTML)
    }
    document.getElementById("addImageContainer").innerHTML = containerHTML.join('')
})

// TO DO: Disable buttons if outside of range





