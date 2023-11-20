function generateHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex}`;
}

const hexButton = document.getElementById("hex-button");
const colorName = document.querySelector(".color-name");

hexButton.addEventListener("click", function () {
  const color = generateHexColor();
  document.body.style.backgroundColor = color;
  colorName.textContent = color;
});
