// ----------------------------------- //
//        ORIGINALLY FROM: https://www.slingacademy.com/article/how-to-generate-random-color-in-javascript/
//        generates a random rgb or rgba color code
//        true means it will include opacity in its final result
// ----------------------------------- //
export function randomColor(bool) {
    //r value
    let r = Math.random() * 256; //the number its being multiplied by is the limit
    //g value
    let g = Math.random() * 256;
    //b value
    let b = Math.random() * 256;

    if (bool == false) {
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    //opacity - limit is 1.0
    let min = 0.01;
    let max = 1.0;

    let a = Math.random() * (max - min) + min; //the number its being multiplied by is the limit
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

// ----------------------------------- //
//        ORIGINALLY FROM: https://github.com/christopher4lis/canvas-boilerplate/blob/master/src/js/utils.js
//        returns a random integer from a specified range
// ----------------------------------- //
export function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}