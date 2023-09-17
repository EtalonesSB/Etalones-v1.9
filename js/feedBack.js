const password = document.getElementById("password");
const form1 = document.getElementById("form1");
const msg = document.getElementById("msg");

// Function to validate password
const validatePassword = (inputPassword) =>
  inputPassword.value.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

// Function used to display errors
const generateError = (errorName, errorMsg) => {
  const passwordError = document.getElementById("passwordError");
  if (errorName == "password") {
    passwordError.innerText = errorMsg;
  }
};

const formValidate = (inputPassword) => {
  if (!validatePassword(inputPassword)) {
    passwordError = "Пожалуйста ведите верный пароль";
    generateError(generateError("password", passwordError));
    return;
  }
};

//triggers when user submits the form
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidate(password);
});

// Focusout event listener triggers when the user clicks anywhere else besides the input
password.addEventListener("focusout", (e) => {
  if (!validatePassword(password)) {
    password.style.borderColor = "red";
    generateError("password", "Пожалуйста ведите верный пароль");
    password.parentElement.classList.add("error");
  }
});
