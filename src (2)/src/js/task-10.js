// Funkcja do generowania losowego koloru w formie heksadecymalnej.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Znajdź elementy w dokumencie.
const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

// Funkcja do tworzenia kolekcji elementów <div>.
function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  return boxes;
}

// Dodaj listener zdarzenia "click" do przycisku "Create".
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  const newBoxes = createBoxes(amount);

  // Dodaj nowe elementy do kontenera.
  boxesContainer.append(...newBoxes);
});

// Dodaj listener zdarzenia "click" do przycisku "Destroy".
destroyButton.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});
