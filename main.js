const html = document.querySelector("html");
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const TAMAÑOBLOQUE = 20
const FILAS = 30
const COLUMNAS = 16

const PIEZA = {
    position: {x: 7, y: 0},
    shape: [
        [1, 1],
        [1, 1]
    ]
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

setInterval(draw, 10)
setInterval(caerPieza, 1000)

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

    for (let y = 0; y < PIEZA.shape.length; y++) {
        for (let x = 0; x < PIEZA.shape[y].length; x++) {
            if (PIEZA.shape[y][x] === 1) {
                context.fillStyle = "blue"
                context.fillRect(x + PIEZA.position.x, y + PIEZA.position.y, 1, 1)
            }
        }
    }
}

html.addEventListener("keydown", function (event) {

    if (event.key === "ArrowDown") {
        if (PIEZA.position.y < 28) {
            PIEZA.position.y++
        }
        
    }

    if (event.key === "ArrowUp") {
        if (PIEZA.position.y > 0) {
            PIEZA.position.y--
        }
    }

    if (event.key === "ArrowLeft") {
        if (PIEZA.position.x > 0) {
            PIEZA.position.x--
        }
    }

    if (event.key === "ArrowRight") {
        if (PIEZA.position.x < 14) {
            PIEZA.position.x++
        }
    }
});

function caerPieza () {

    if (PIEZA.position.y < 28)
        PIEZA.position.y++

    if (PIEZA.position.y === 28 ||
        
        TABLERO[PIEZA.position.x][PIEZA.position.y + 1] === 1) {


    }
}