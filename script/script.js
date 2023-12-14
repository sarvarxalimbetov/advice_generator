const number = document.querySelector("#advice_number")
const text = document.querySelector(".advice_text")
const generator = document.querySelector(".advice_button")

const API = "https://api.adviceslip.com/advice"

generator.addEventListener("click", () => {
    fetch(API).then(response => response.json()).then(({slip}) => {
        number.textContent = `#${slip.id}`
        text.textContent = `"${slip.advice}"`
    })
})