// ------------------------------------------------ //
//        FOR ADDING CHARMS TO THE CONTAINER        //
// ------------------------------------------------ //

// Add/Subtract the number of charms on a screen
const addCharmBTN = document.getElementById("addCharmBtn")
const subtractCharmBTN = document.getElementById("subtractCharmBtn")
const charmCount = document.getElementById("charmCountInput")


subtractCharmBTN.addEventListener("click", () => {
    if (Number(charmCount.value) > 0) {
        charmCount.value = Number(charmCount.value) - 1
    }
})
addCharmBTN.addEventListener("click", () => {
    //temp limit to ensure things don't get crazy
    if (Number(charmCount.value) < 5) {
        charmCount.value = Number(charmCount.value) + 1
    }
})

// Update image upload to change based off of current charm count;