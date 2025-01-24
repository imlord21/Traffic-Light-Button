const  MINI_SECONDS =10000;
const BUTTON = document.getElementById("btn");
const COLORS = ["red", "yellow", "green"];
let colorIndex = 0;
let intervalId;

function changeColor() {
    BUTTON.style.backgroundColor = COLORS[colorIndex];
    colorIndex = (colorIndex + 1) % COLORS.length;
}

function toggleColor() {
    clearInterval(intervalId);
    changeColor();
    intervalId = setInterval(changeColor, MINI_SECONDS);
}

intervalId = setInterval(changeColor, MINI_SECONDS);