// Znajdź elementy w dokumencie.
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Dodaj listener zdarzenia "input" do pola input#name-input.
nameInput.addEventListener("input", () => {
  // Pobierz aktualną wartość pola input.
  const inputValue = nameInput.value;

  // Ustaw tekst w span#name-output zgodnie z wartością pola input.
  if (inputValue.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});
