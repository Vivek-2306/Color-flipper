function getRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRGBColor() {
  const r = getRandomNumbers(0, 255);
  const g = getRandomNumbers(0, 255);
  const b = getRandomNumbers(0, 255);

  return `rgb(${r},${g},${b})`;
}

function generateHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex}`;
}

function generateRandomColorNames() {
  const colorNames = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
    "cyan",
    "magenta",
  ];
  return colorNames[getRandomNumbers(0, colorNames.length - 1)];
}

const simpleButton = document.getElementById("simple-button");
const colorName = document.querySelector(".color-name");

function generateSimpleColor() {
  const randomNumber = getRandomNumbers(0, 2);
  let color = "";
  switch (randomNumber) {
    case 0:
      color = generateRGBColor();
      break;
    case 1:
      color = generateHexColor();
      break;
    case 2:
      color = generateRandomColorNames();
      break;
    default:
      color = generateRGBColor();
      break;
  }
  return color;
}
simpleButton.addEventListener("click", function () {
  const color = generateSimpleColor();
  document.body.style.backgroundColor = color;
  colorName.textContent = color;
});
