// Znajdź elementy w dokumencie.
const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

// Dodaj listener zdarzenia "input" do suwaka input#font-size-control.
fontSizeControl.addEventListener("input", () => {
  // Pobierz aktualną wartość suwaka.
  const fontSize = fontSizeControl.value;

  // Ustaw rozmiar czcionki dla elementu span#text.
  textSpan.style.fontSize = `${fontSize}px`;
});
