
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const formData = new FormData(loginForm);

  const formValues = {};

  formData.forEach((value, key) => {
    formValues[key] = value;
  });

  if (!formValues.email || !formValues.password) {
    alert("Proszę uzupełnić wszystkie wymagane pola!.");
  } else {
    console.log(formValues);

    loginForm.reset();
  }
});
