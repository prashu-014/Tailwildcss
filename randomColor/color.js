const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const generateBtn = document.getElementById("colorGenerateBtn");
const colorBox = document.getElementById("colorBox");
const hexvalue = document.getElementById("colorHexValue");

generateBtn.addEventListener("click", () => {

    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += colors[generateRandomNumber()];

    }

    colorBox.style.backgroundColor = color;

    hexvalue.textContent = color;


});

generateRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}









