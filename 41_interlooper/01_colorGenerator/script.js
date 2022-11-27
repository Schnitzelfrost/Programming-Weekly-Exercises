/*
 * 1. Color Generator
 *
 * TASK: Annotate each line with a comment, try to understand how everything
 * connects. You can skip over the function `tintRGBColor`, all it does is 
 * generate the next tint of a color using some maths that are not very
 * important to the task at hand.
 * 
 */


/**
 * The numbers are allowed to overshoot as most browsers handle >255 as 255.
 * Equation source: https://maketintsandshades.com/about
 * @param {[number, number, number]} RGBColor
 * @param {number} amount 
 * @returns [number, number, number]
 */
function tintRGBColor(RGBColor, amount) {
    return [
        Math.floor(Number.parseInt(RGBColor[0]) + ((255 - 102) * amount)),
        Math.floor(Number.parseInt(RGBColor[1]) + ((255 - 51) * amount)),
        Math.floor(Number.parseInt(RGBColor[2]) + ((255 - 153) * amount))
    ]
};


/**
 * Calling the function with [10, 40, 60] returns "rgb(10, 40, 60)"
 * @param {[number, number, number]} RGBColor 
 * @returns `rgb({number}, {number}, {number})`
 */
function RGBString(RGBColor) {
    return `rgb(${RGBColor[0]}, ${RGBColor[1]}, ${RGBColor[2]})`;
};


/**
 * Updates each of the color swatches according to the current value of `RGBColor`
 */
function updateColorSwatches() {
    let amount = 0.1;

    for (const colorSwatch of colorSwatches) {
        const nextTint = tintRGBColor(RGBColor, amount);
        colorSwatch.style.backgroundColor = RGBString(nextTint);

        amount += 0.2;
    }
}


let RGBColor = ["50", "50", "110"];
const colorSwatches = document.querySelectorAll(".color-generator-swatch");

const colorInputs = document.querySelectorAll(".color-generator-input");
for (let i = 0; i < colorInputs.length; i += 1) {
    colorInputs[i].addEventListener("input", function (event) {
        RGBColor[i] = event.target.value;
        updateColorSwatches();
    });
}

updateColorSwatches(); // Run the tinting once to get the starting colors
