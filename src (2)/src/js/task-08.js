// Znajdź formularz i dodaj listener zdarzenia "submit".
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  // Zapobiegaj domyślnemu zachowaniu przycisku submit (czyli odświeżeniu strony).
  event.preventDefault();

  // Pobierz wartości pól formularza.
  const formData = new FormData(loginForm);

  // Utwórz pusty obiekt, do którego dodasz dane z formularza.
  const formValues = {};

  // Przejdź przez wszystkie pola formularza i dodaj je do obiektu formValues.
  formData.forEach((value, key) => {
    formValues[key] = value;
  });

  // Sprawdź, czy wszystkie pola są wypełnione.
  if (!formValues.email || !formValues.password) {
    alert("Proszę uzupełnić wszystkie wymagane pola!.");
  } else {
    // Jeśli wszystkie pola są wypełnione, wypisz obiekt z danymi w konsoli.
    console.log(formValues);

    // Wyczyść wartości pól input za pomocą metody reset.
    loginForm.reset();
  }
});
