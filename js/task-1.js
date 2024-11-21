const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

for (const item of items) {
  const category = item.querySelector('.list-title');
  console.log(`Category: ${category.textContent}`);
  const subItems = item.querySelectorAll('.sub-item');
  console.log(`Elements: ${subItems.length}`);
}
