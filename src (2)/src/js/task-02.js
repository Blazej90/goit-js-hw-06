const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Znajdź listę ul#ingredients na stronie.
const ingredientsList = document.getElementById("ingredients");

// Iteruj przez tablicę ingredients i twórz <li> dla każdego składnika.
ingredients.forEach((ingredient) => {
  // Utwórz nowy element <li>.
  const listItem = document.createElement("li");

  // Dodaj nazwę składnika jako jego zawartość tekstową.
  listItem.textContent = ingredient;

  // Dodaj klasę "item" do elementu <li>.
  listItem.classList.add("item");

  // Dodaj utworzony element <li> do listy ul#ingredients.
  ingredientsList.appendChild(listItem);
});
