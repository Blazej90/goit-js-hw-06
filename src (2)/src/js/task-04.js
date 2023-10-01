// Znajdź elementy w dokumencie.
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.getElementById("value");

// Utwórz zmienną counterValue i nadaj jej początkową wartość 0.
let currentValue = 0;

// Dodaj click listener do przycisku dekrementacji.
decrementBtn.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

// Dodaj click listener do przycisku inkrementacji.
incrementBtn.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
