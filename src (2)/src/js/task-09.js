// Funkcja do generowania losowego koloru w formie heksadecymalnej.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Znajdź elementy w dokumencie.
const body = document.body;
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

// Dodaj listener zdarzenia "click" do przycisku.
changeColorButton.addEventListener("click", () => {
  // Wygeneruj losowy kolor.
  const randomColor = getRandomHexColor();

  // Zmień kolor tła elementu <body> za pomocą stylu inline.
  body.style.backgroundColor = randomColor;

  // Wyświetl wybrany kolor w elemencie <span>.
  colorSpan.textContent = randomColor;
});
