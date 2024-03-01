const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
ingredients.forEach((elem) => {
  const li = document.createElement("li");
  li.textContent = elem;
  li.classList.add("item");
  listEl.append(li);
});
