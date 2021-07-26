// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListRef = document.querySelector("#ingredients")

const addEl = ingredients => ingredients.map((ingredient) => {
  const createEl = document.createElement('li')
  createEl.textContent = ingredient
return ingredientsListRef.append(createEl)
}
)

addEl(ingredients);