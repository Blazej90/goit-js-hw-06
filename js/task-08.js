const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formElements = event.target.elements;
  const formValues = {};

  for (let element of formElements) {
    if (element.tagName === "INPUT") {
      formValues[element.name] = element.value;
    }
  }

  if (!formValues.email || !formValues.password) {
    alert("Proszę uzupełnić wszystkie wymagane pola!");
  } else {
    console.log(formValues);
    loginForm.reset();
  }
});
