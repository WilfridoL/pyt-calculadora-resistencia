import { rellenarSelect, transformarResultado } from "./selectData.js";
import { validarSelect } from "./validacion.js";


const selectCampo = document.querySelectorAll("[data-select]")
const bamdas = document.querySelectorAll(".banda")
const indicador = document.querySelectorAll(".indicador")
const msjErr = document.querySelectorAll(".msjErr")
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');


rellenarSelect(selectCampo[0], 0) // Banda 1
rellenarSelect(selectCampo[1], 0) // Banda 2
rellenarSelect(selectCampo[2], 1) // Multiplicador

function seleccionarColorBandas(id) {
    selectCampo[id].style.background = selectCampo[id].options[selectCampo[id].selectedIndex].style.background;
    selectCampo[id].style.color = selectCampo[id].options[selectCampo[id].selectedIndex].style.color;
    bamdas[id].style.background = selectCampo[id].options[selectCampo[id].selectedIndex].style.background;
    indicador[id].style.background = selectCampo[id].options[selectCampo[id].selectedIndex].style.background;
    indicador[id].style.color = selectCampo[id].options[selectCampo[id].selectedIndex].style.color;
    indicador[id].style.border = ".7px solid";
    indicador[id].style.borderColor = selectCampo[id].options[selectCampo[id].selectedIndex].style.color;
}

selectCampo[0].addEventListener('change', () => seleccionarColorBandas(0))
selectCampo[1].addEventListener('change', () => seleccionarColorBandas(1))
selectCampo[2].addEventListener('change', () => seleccionarColorBandas(2))
selectCampo[3].addEventListener('change', () => seleccionarColorBandas(3))
toggleBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

document.getElementById("btn").addEventListener('click', (e) => {
    e.preventDefault()
    let resultCal = parseInt(selectCampo[0].value + selectCampo[1].value) * parseInt(selectCampo[2].value)
    // validacion de los campos
    let errorSelect = false;

    for (let i = 0; i < selectCampo.length; i++) {
        if (validarSelect(selectCampo[i], msjErr[i]) === false) errorSelect = true; // marcamos que hubo error
    }

    if (errorSelect) return; // sale de la función y no ejecuta el resto

    document.getElementById('resultado').innerHTML = `
        <h2 class="text-2xl font-bold">Valor de la resistencia</h2>
        <h2 class="text-2xl font-regular">${transformarResultado(resultCal)} Ohms</h2>
        <h2 class="text-2xl font-regular">Tolerancia maxima: ${transformarResultado(resultCal + (resultCal * (selectCampo[3].value / 100)))} Ohms</h2>
        <h2 class="text-2xl font-regular">Tolerancia Minima: ${transformarResultado(resultCal - (resultCal * (selectCampo[3].value / 100)))} Ohms</h2>
    `
})