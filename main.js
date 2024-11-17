const html = document.querySelector("html");
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const TAMAÑOBLOQUE = 20
const FILAS = 30
const COLUMNAS = 16

const PIEZAS = [
    [1, 1],
    [1, 1]
]

let piezaActual = {
    shape: PIEZAS[0],
    position: { x: 7, y: 0 },
}

const TABLERO = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
];

canvas.height = FILAS * TAMAÑOBLOQUE;
canvas.width = COLUMNAS * TAMAÑOBLOQUE;
context.scale(TAMAÑOBLOQUE, TAMAÑOBLOQUE);

setInterval(draw, 1000)
// setInterval(caerPieza, 1000)

function draw() {
    
    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)
    for (let fil = 0; fil < COLUMNAS; fil++) {
        for (let col = 0; col < FILAS; col++) {
            if (TABLERO[col][fil] === 1) {
                context.fillStyle = "red"
                context.fillRect(fil, col, 1, 1)
            }
        }
    }

    drawPieza()
    console.log(piezaActual.position)
}

function drawPieza() {
    
    for (let fil = 0; fil < piezaActual.shape.length; fil++) {
        for (let col = 0; col < piezaActual.shape[fil].length; col++) {
            if (piezaActual.shape[fil][col] === 1) {
                context.fillStyle = "blue"
                context.fillRect(piezaActual.position.x, piezaActual.position.y, 1, 1)
            }
        }
    }
}

html.addEventListener("keydown", function (event) {

    if (event.key === "ArrowDown") {
        if (piezaActual.position.y < 28) {
            piezaActual.position.y++
        }
    }

    if (event.key === "ArrowUp") {
        if (piezaActual.position.y > 0) {
            piezaActual.position.y--
        }
    }

    if (event.key === "ArrowLeft") {
        if (PIEZA.position.x > 0) {
            piezaActual.position.x--
        }
    }

    if (event.key === "ArrowRight") {
        if (piezaActual.position.x < 14) {
            piezaActual.position.x++
        }
    }
});

// function caerPieza () {

//     if (PIEZA.position.y < 28)
//         PIEZA.position.y++

//     if (PIEZA.position.y === 28 ||
//         TABLERO[PIEZA.position.x][PIEZA.position.y + 1] === 1) {
//     }
// }