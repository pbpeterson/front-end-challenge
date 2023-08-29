import { getNodes } from "./nodes.js";
import { checkboxesObj } from "./events.js";

const MAX_VALUE = 100;
const MIN_VALUE = 1;

export function handleButton(isDisabled) {
  const submitButton = document.getElementById("submit-button");
  submitButton.disabled = isDisabled;
  submitButton.setAttribute("aria-disabled", isDisabled);
}

export function validateFields() {
  const { decrementButton, incrementButton, inputQuantityStickers } = getNodes();
  const { value } = inputQuantityStickers;

  const isValueGreaterThanAllowed = value > MAX_VALUE;
  const isValueLowerThanAllowed = value < MIN_VALUE;

  const areAnyCheckboxesChecked = Object.values(checkboxesObj).some(Boolean);

  inputQuantityStickers.disabled = !areAnyCheckboxesChecked;

  if (!areAnyCheckboxesChecked) {
    decrementButton.disabled = true;
    incrementButton.disabled = true;
    handleButton(true);
    return;
  }

  inputQuantityStickers["ariaInvalid"] = isValueGreaterThanAllowed || isValueLowerThanAllowed;

  decrementButton.disabled = isValueLowerThanAllowed;
  decrementButton["ariaDisabled"] = isValueLowerThanAllowed;

  incrementButton.disabled = isValueGreaterThanAllowed;
  incrementButton["ariaDisabled"] = isValueGreaterThanAllowed;

  handleButton(isValueGreaterThanAllowed || isValueLowerThanAllowed);
}
