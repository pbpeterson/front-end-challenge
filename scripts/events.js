import { getNodes } from "./nodes.js"
import { validateFields } from "./validators.js"

export const checkboxesObj = {}

export const makeEvents = () => {
  const { decrementButton, incrementButton, inputQuantityStickers, form, checkboxes } = getNodes()

  for (let [_, value] of checkboxes.entries()) {
    checkboxesObj[value.id] = value.checked
  }

  inputQuantityStickers.addEventListener("keyup", () => {
    validateFields();
  });

  incrementButton.addEventListener("click", (e) => {
    const { value } = inputQuantityStickers;
    const newValue = Number(value) + 1;

    inputQuantityStickers.value = newValue;

    validateFields();
  });

  decrementButton.addEventListener("click", () => {
    const { value } = inputQuantityStickers;
    const newValue = Number(value) - 1;

    inputQuantityStickers.value = newValue;

    validateFields();
  });

  form.addEventListener("submit", () => {
    const main = document.querySelector("main")
    main.removeChild(form)

    const successMessage = document.createElement("p")
    successMessage.className = "success-message"
    successMessage.innerText = "Formulário enviado com sucesso!"

    main.appendChild(successMessage)
  })

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      checkboxesObj[event.target.id] = event.target.checked

      const { checked } = event.target

      event.target["ariaChecked"] = checked


      validateFields()

    })
  })
}