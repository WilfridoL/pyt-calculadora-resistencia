export const validarSelect = (input, msj) => {
    // console.log(input, msj)
    if (!input.value) {
        msj.style.display = "block"
        msj.textContent = "Seleccione el color para continuar"
        input.style.borderColor = "#F00"
        input.style.color = "#F00"
        return false
    }else {
        msj.style.display = "none"
        input.style.borderColor = "#d1d5db"
    }
}