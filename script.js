const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]")
    console.log(input.value)
}
// Arrow funciones anonimas
console.log(btn);
btn.addEventListener("click", createTask)