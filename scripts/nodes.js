export const getNodes = () => {
  const decrementButton = document.getElementById("decrement-button");
  const inputQuantityStickers = document.getElementById(
    "input__quantity-stickers"
  );
  const incrementButton = document.getElementById("increment-button");
  const form = document.querySelector("form")
  const checkboxes = document.querySelectorAll("input[type='checkbox']")

  return {
    decrementButton,
    inputQuantityStickers,
    incrementButton,
    form,
    checkboxes
  }

}