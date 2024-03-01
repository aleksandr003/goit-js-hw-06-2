const colorEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  colorEl.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
