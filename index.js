const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  if (usernameVal === "") {
    setError(username, "Enter The Name");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    setError(email, "Enter The Email");
  } else if (!validateEmail(emailVal)) {
    setError(email, "Enter a valid Email");
  } else {
    setSuccess(email);
  }

  if (passwordVal === "") {
    setError(password, "Enter The Password");
  } else if (passwordVal.length < 8) {
    setError(password, "Password must be at least 8 characters");
  } else {
    setSuccess(password);
  }

  if (cpasswordVal === "") {
    setError(cpassword, "Confirm the password");
  } else if (cpasswordVal !== passwordVal) {
    setError(cpassword, "Passwords do not match");
  } else {
    setSuccess(cpassword);
  }
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}
