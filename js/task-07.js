const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = `${inputEl.value}px`;
inputEl.addEventListener("input", function () {
  textEl.style.fontSize = `${inputEl.value}px`;
});
