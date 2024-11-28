// Autor: Manuel Fernández

// etiquetas del html
const html = document.querySelector("html");
const canvas = document.querySelector("canvas");
// como va a dibujar el canvas
const context = canvas.getContext("2d");

// constantes del juego
const TAMAÑOBLOQUE = 20
const FILAS = 30
const COLUMNAS = 16

// tablero de juego
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

// dimensiones del canvas
canvas.height = FILAS * TAMAÑOBLOQUE;
canvas.width = COLUMNAS * TAMAÑOBLOQUE;
// escala que usa el canvas para dibujar las piezas
context.scale(TAMAÑOBLOQUE, TAMAÑOBLOQUE);

const colores = {
    "c": "cyan",
    "a": "blue",
    "o": "orange",
    "r": "red",
    "y": "yellow",
    "g": "green",
    "v": "violet",
    '0' : "black"
}

// declaracion de todas las piezas del juego
const PIEZAS = [
    [ // cuadrado
        ["y", "y"],
        ["y", "y"]
    ],
    [
        ["c", "c", "c", "c"],
    ], // linea

    [ // Z,
        ["r", "r", 0],
        [0, "r", "r"]
    ],

    [ // s
        [0, "g", "g"],
        ["g", "g",0],
        
    ],

    [ // L
        [0, "o", 0],
        [0, "o", 0],
        [0, "o", "o"]
    ],
    [ // J
        [0, "b",0],
        [0, "b", 0],
        ["b", "b", 0]
    ],
    [ // flecha
        [0, "v", 0],
        ["v", "v", "v"]
    ]
]

// pieza con la que jugamos
const piezaActual = {
    position: { x: 6, y: 0 },
    shape: []
}
// asignamos una pieza aleatoria
piezaActual.shape =  PIEZAS[Math.floor(Math.random() * PIEZAS.length)]

// funcion que se encarga de actualizar el juego
let contador = 0
function update() {    
    // contador para la caida de la pieza
    contador++;
    // dibujo del juego
    draw()
    // llamada recursiva para actualizar el juego
    requestAnimationFrame(update)

    // si el contador llega a 125 la pieza cae
    if (contador === 40) {
        piezaActual.position.y++
        contador = 0
    } 
    // si la pieza colisiona con algo la subimos 
    // y la reposicionamos en el tablero
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
            if (col !== 0) {
                context.fillStyle = colores[col]
                context.fillRect(x, y, 1, 1)
            }
        })
    });
    drawPieza()
}

function drawPieza() {

    piezaActual.shape.forEach((fil, y) => {
        fil.forEach((col, x) => {
            if (col !== 0) {
                context.fillStyle = colores[col]
                context.fillRect(x + piezaActual.position.x, y + piezaActual.position.y, 1, 1)
            }
        })
    })
}

html.addEventListener("keydown", function (event) {

    // las comprobaciones se hacen en el siguiente orden
    // -> se avanza la posición de la pieza
    // -> se comprueba si el valor es correcto
    // -> si el valor no es correcto se retrocede la posición de la pieza

    // si la tecla pulsada es la flecha de arriba 
    if (event.key === "ArrowUp") {
        // se da la vuelta a la pieza
        piezaActual.shape = darVolta(piezaActual.shape)
    }
    // si la tecla pulsada es la flecha de abajo la pieza cae
    if (event.key === "ArrowDown") {
        piezaActual.position.y++
        if (checkColision()) {
            piezaActual.position.y--
            pasarTablero()
            removeFilas()
        }
        console.log(tablero)
    }
    // si la tecla pulsada es la flecha de la izquierda
    if (event.key === "ArrowLeft") {
        piezaActual.position.x--
        if (checkColision()) {
            piezaActual.position.x++
        }
    }
    // si la tecla pulsada es la flecha de la derecha
    if (event.key === "ArrowRight") {
        piezaActual.position.x++
        if (checkColision()) {
            piezaActual.position.x--
        }
    }
    // si la tecla pulsada es la barra espaciadora
    if (event.key === ' ') {
        while (!checkColision()) {
            piezaActual.position.y++
        }
        if(checkColision()){
            piezaActual.position.y--
            pasarTablero()
            removeFilas()
        }
    }
})

// funcion que se encarga de comprobar si la pieza colisiona con algo
function checkColision() {
    return piezaActual.shape.find((fil, y) => {
        return fil.find((col, x) => {
            return (
                // si la pieza colisiona con el suelo o con los lados
                // es diferente de 0 porque si esta fuera de los lados es Undefined
                // el operador ?. sirve para comprobar primero una cosa y luego otra si la primera es true
                col !== 0 &&
                tablero[y + piezaActual.position.y]?.[x + piezaActual.position.x] !== 0
            )
        })
    })
}
// funcion que se encarga de pasar la pieza al tablero
function pasarTablero() {
    piezaActual.shape.forEach((fil, y) => {
        fil.forEach((col, x) => {
            if (col !== 0) {
                // pintamos en el tablero la posicion de cada pieza que tenga un uno
                tablero[y + piezaActual.position.y][x + piezaActual.position.x] = piezaActual.shape[y][x]
            }
        })
    });
    // creacion de una nueva pieza
    piezaActual.position = { x: 7, y: 0 }
    piezaActual.shape = PIEZAS[Math.floor(Math.random() * PIEZAS.length)]
}

// funcion que se encarga de eliminar las filas completas
function removeFilas() {
    tablero.forEach((fila, y) => {
        if (fila.every(col => col !== 0 && Object.keys(colores).includes(col))) {
            // con splice eliminamos la fila completa
            tablero.splice(y, 1)
            // con unshift añadimos una fila nueva al principio
            tablero.unshift(new Array(COLUMNAS).fill(0))
        }
    })
}
// funcion que se encarga de dar la vuelta a la pieza
function darVolta (matriz) {
    const nuevaMatriz = []; // Aquí guardaremos la matriz rotada

    // Recorremos las columnas de la matriz original
    for (let col = 0; col < matriz[0].length; col++) {
        const nuevaFila = []; // Cada columna se convertirá en una nueva fila

        // Recorremos las filas de la matriz original
        for (let filas = 0; filas < matriz.length; filas++) {
            // Tomamos el elemento de la columna actual y lo añadimos a la nueva fila
            nuevaFila.push(matriz[filas][col]); 
        }
        // Invertimos la nueva fila para completar la rotación
        nuevaMatriz.push(nuevaFila.reverse());
    }
    return nuevaMatriz
}
// llamada a la funcion update para iniciar el juego
update()