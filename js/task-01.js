// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
  const titleEl = item.querySelector("h2");
  const lis = item.querySelectorAll("li");
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${lis.length}`);
});
