// Znajdź pole input i pobierz wartość atrybutu data-length.
const validationInput = document.getElementById("validation-input");
const dataLength = parseInt(validationInput.getAttribute("data-length"));

// Dodaj listener zdarzenia "blur" do pola input.
validationInput.addEventListener("blur", () => {
  // Pobierz aktualną wartość pola input.
  const inputValue = validationInput.value;

  // Sprawdź, czy liczba symboli jest odpowiednia i ustaw odpowiednią klasę CSS.
  if (inputValue.length === dataLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
