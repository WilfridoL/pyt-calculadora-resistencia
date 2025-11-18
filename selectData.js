const data = [
    { id: 0, nombre: "Negro", bck: "#000", color: "#fff", value: 1 },
    { id: 1, nombre: "Marrón", bck: "#431407", color: "#fff", value: 10 },
    { id: 2, nombre: "Rojo", bck: "#F00", color: "#fff", value: 100 },
    { id: 3, nombre: "Naranja", bck: "#fb923c", color: "#fff", value: 1000 },
    { id: 4, nombre: "Amarrillo", bck: "#fde047", color: "#000", value: 10000 },
    { id: 5, nombre: "Verde", bck: "#16a34a", color: "#fff", value: 100000 },
    { id: 6, nombre: "Azul", bck: "#1d4ed8", color: "#fff", value: 1000000 },
    { id: 7, nombre: "Violeta", bck: "#a78bfa", color: "#fff", value: 10000000 },
    { id: 8, nombre: "Gris", bck: "#78716c", color: "#fff", value: 100000000 },
    { id: 9, nombre: "Blanco", bck: "#fff", color: "#000", value: 1000000000 }
]

const transformarResultado = (num) => {
    if (num >= 1000 && num <= 999999) num = `${num / 1000}k`
    if (num >= 1000000 && num <= 999999999) num = `${num / 1000000}M`
    if (num >= 1000000000) num = `${num / 1000000000}G`
    return num
}

const rellenarSelect = (campo, tip) => {
    data.map(event => {
        const { id, nombre, bck, color, value } = event
        campo.innerHTML += `
            <option 
            name=${id}
            value="${tip != 0 ? value : id}"
            style="
                background: ${bck};
                color: ${color};
                border: .7px solid ${color};
            ">
            ${nombre} (${tip != 0 ? 'x'+transformarResultado(value) + ' Ω' : id})
            </option>
        `
    })
}
export {
    data,
    rellenarSelect,
    transformarResultado
}