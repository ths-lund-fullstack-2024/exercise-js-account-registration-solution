export const unpackEvent = (event) => {
  const closestInputContainer = event.target.closest(".input-container");
  const { firstElementChild, lastElementChild } = closestInputContainer; // We know this is a html element, which means it has these attributes

  return {
    closestInputContainer,
    label: firstElementChild,
    input: lastElementChild,
  };
};

export const isPasswordValid = (password) => password.length >= 8;

export const isConfirmPasswordValid = (confirmPassword, password) =>
  confirmPassword === password;

export const checkAllInputsHaveValue = () => {
  const inputs = [...document.querySelectorAll("input")];
  return inputs.every((input) => input.value !== "");
};
