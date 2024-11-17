const html = document.querySelector("html");
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const TAMAÑOBLOQUE = 20
const FILAS = 30
const COLUMNAS = 16

const tablero = [
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

canvas.height = FILAS * TAMAÑOBLOQUE;
canvas.width = COLUMNAS * TAMAÑOBLOQUE;
context.scale(TAMAÑOBLOQUE, TAMAÑOBLOQUE);

const PIEZAS = [
    [ // cuadrado
        [1, 1],
        [1, 1]
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
    ], // linea

    [ // Z
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],

    [ // s
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],

    [ // L
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],

    [ // flecha
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ]
]

const piezaActual = {
    position: { x: 7, y: 0 },
    shape: []
}

piezaActual.shape =  PIEZAS[Math.floor(Math.random() * PIEZAS.length)]

let contador = 0
function update() {
    
    contador++;
    draw()
    requestAnimationFrame(update)
    if (contador === 125) {
        piezaActual.position.y++
        contador = 0
    }
    if (checkColision()) {
        piezaActual.position.y--
        pasarTablero()
        removeFilas()
    }

}

function draw() {
    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)

    tablero.forEach((fila, y) => {
        fila.forEach((col, x) => {
            if (col === 1) {
                context.fillStyle = "red"
                context.fillRect(x, y, 1, 1)
            }
        })
    });
    drawPieza()
    // console.log(piezaActual.position)
    // console.log(TABLERO)
}

function drawPieza() {

    piezaActual.shape.forEach((fil, y) => {
        fil.forEach((col, x) => {
            if (col === 1) {
                context.fillStyle = "blue"
                context.fillRect(x + piezaActual.position.x, y + piezaActual.position.y, 1, 1)
            }
        })
    })
}

html.addEventListener("keydown", function (event) {

    if (event.key === "ArrowUp") {
        piezaActual.shape = darVolta()
    }


    if (event.key === "ArrowDown") {
        piezaActual.position.y++
        if (checkColision()) {
            piezaActual.position.y--
            pasarTablero()
            removeFilas()
        }
    }

    if (event.key === "ArrowLeft") {
        // console.log(piezaActual.position.x)
        // console.log(tablero[piezaActual.position.x][piezaActual.position.y])
        piezaActual.position.x--
        if (checkColision()) {
            piezaActual.position.x++
        }
    }

    if (event.key === "ArrowRight") {
        piezaActual.position.x++
        if (checkColision()) {
            piezaActual.position.x--
        }
    }
})

function checkColision() {
    return piezaActual.shape.find((fil, y) => {
        return fil.find((col, x) => {
            return (
                col !== 0 &&
                tablero[y + piezaActual.position.y]?.[x + piezaActual.position.x] !== 0
            )
        })
    })
}

function pasarTablero() {

    piezaActual.shape.forEach((fil, y) => {
        fil.forEach((col, x) => {
            if (col === 1) {
                tablero[y + piezaActual.position.y][x + piezaActual.position.x] = 1
            }
        })
    });

    piezaActual.position = { x: 7, y: 0 }
    piezaActual.shape = PIEZAS[Math.floor(Math.random() * PIEZAS.length)]

}

function removeFilas() {

    tablero.forEach((fila, y) => {
        if (fila.every(col => col === 1)) {
            tablero.splice(y, 1)
            tablero.unshift(new Array(COLUMNAS).fill(0))
        }
    })
}

function darVolta () {

    return piezaActual.shape.map((_, i) => piezaActual.shape.map(fila => fila[i]).reverse());

}

update()