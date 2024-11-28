import {
  handleOnClick,
  handleOnFocusIn,
  handleOnFocusOut,
  handleOnInput,
  handleOnSubmit,
} from "./eventHandlers.js";

// ########## References ########## //
const prefillBtn = document.querySelector(".prefill-btn");
const form = document.querySelector("form");

// ########## Register Event Listeners ########## //
form.addEventListener("click", handleOnClick);
form.addEventListener("focusin", handleOnFocusIn);
form.addEventListener("focusout", handleOnFocusOut);
form.addEventListener("input", handleOnInput);
form.addEventListener("submit", handleOnSubmit);

// ########## Other code ########## //
prefillBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll("input");
  const submitBtn = document.querySelector(".submit-btn");

  const preFillStrings = [
    "Niklas Fähnrich",
    "derfahnrich",
    "derfahnrich@hotmail.com",
    "savedpwddeluxe",
    "savedpwddeluxe",
  ];

  submitBtn.removeAttribute("disabled");

  inputs.forEach((input, index) => {
    const label = input.previousElementSibling;
    label.classList.add("minimize");
    input.value = preFillStrings[index];
  });
});
