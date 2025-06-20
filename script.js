const  MINI_SECONDS = 10000;
const button = document.getElementById("btn");
const colors = ["red", "yellow", "green"];
let colorIndex = 0;
let intervalId;

function changeColor() {
    button.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

function toggleColor() {
    clearInterval(intervalId);
    changeColor();
    intervalId = setInterval(changeColor, MINI_SECONDS);
}

intervalId = setInterval(changeColor, MINI_SECONDS);
