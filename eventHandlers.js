import {
  unpackEvent,
  isPasswordValid,
  isConfirmPasswordValid,
  checkAllInputsHaveValue,
} from "./utilities.js";

export const handleOnClick = (event) => {
  if (event.target.tagName === "FORM") return;
  if (event.target.id === "submit-btn") return;

  const { input } = unpackEvent(event);
  input.focus();
};

export const handleOnFocusIn = (event) => {
  if (event.target.id === "submit-btn") return;

  const { closestInputContainer, label } = unpackEvent(event);

  closestInputContainer.classList.add("focus");
  label.classList.add("minimize");
};

export const handleOnFocusOut = (event) => {
  if (event.target.id === "submit-btn") return;

  const { closestInputContainer, label, input } = unpackEvent(event);

  closestInputContainer.classList.remove("focus");

  if (input.value === "") {
    label.classList.remove("minimize");
  }
};

export const handleOnInput = (event) => {
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirmPassword");
  const { closestInputContainer, input } = unpackEvent(event);

  if (input.id === "password") {
    isPasswordValid(password.value)
      ? closestInputContainer.classList.add("valid")
      : closestInputContainer.classList.remove("valid");

    isPasswordValid(password.value)
      ? closestInputContainer.classList.remove("error")
      : closestInputContainer.classList.add("error");
  }

  if (input.id === "confirmPassword") {
    isConfirmPasswordValid(confirmPassword.value, password.value)
      ? closestInputContainer.classList.add("valid")
      : closestInputContainer.classList.remove("valid");

    isConfirmPasswordValid(confirmPassword.value, password.value)
      ? closestInputContainer.classList.remove("error")
      : closestInputContainer.classList.add("error");
  }

  const submitBtn = document.querySelector(".submit-btn");

  if (
    isPasswordValid(password.value) &&
    isConfirmPasswordValid(confirmPassword.value, password.value) &&
    checkAllInputsHaveValue()
  ) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "true");
  }
};

export const handleOnSubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted");

  const inputs = document.querySelectorAll("input");
  const submitInfo = {};

  inputs.forEach((input) => {
    submitInfo[input.id] = input.value;
  });

  console.log(submitInfo);
};
