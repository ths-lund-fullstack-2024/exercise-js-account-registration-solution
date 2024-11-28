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
