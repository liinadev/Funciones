var tuesday = true;
var monday = false;

if (tuesday) {
   console.log("voy a clase");
}
else {
   console.log("Me quedo estudiando");
}

var mayor = true;
var menor = false;

if (18 > 10) {
   console.log(" SI puede ingresar al establecimiento el descanso ");
}
else {
   console.log("NO puede ingresar");
}

const animals = ["gato", "ballena", "loro", "dinosaurio", "colibrí", "mariposa", "perro", "pájaro"];
for (i = 0; i < animals.length; i++) {
   console.log(" Soy " + animals[i]);
}



const secuenciaUno = [2, 5, 10, 30, 25, 52, 7, 3, 41, 15, 70];
const secuenciaDos = [14, 40, 2, 55, 10, 39, 28, 9, 27, 56, 1, 8, 5];

let secuenciaResultado = [];


for (let i = 0; i < secuenciaUno.length; i++) {
   secuenciaResultado.push(secuenciaUno[i] + secuenciaDos[i]);
}
// Agregar validación de comparar los array y deben ser del mismo tamaño para ejecutarse.
console.log("Resultado de la suma:", secuenciaResultado);


// Solución de Tabla de multiplicar pedir por parametro un número del 1 a 10,
// y hacer la tabla de multiplicar de ese número 


function tablaDeMultipicar() {
   for (let numero = 1; numero <= 10; numero++) {
      console.log(" Tabla del " + numero + ":");
      for (i = 1; i <= 10; i++) {
         console.log(numero + " * " + i + " = " + (numero * i));
      }
      console.log("");
   }
}
tablaDeMultipicar();

//SOLUCION DE PRECEDENCIA

const uno = ("Hola " + 5 + 6);
console.log(uno);

console.log("Hola " + (5 + 3));

console.log((6 - 3) * (8 + 6));

console.log(10 + 8 / 2 * 10);

console.log("Lina tiene " + (30 * 2 - 5 * 2 - 25) + " años ");

console.log((10 - 2) + " ejercicios realizados y los " + (30 * 2 - 52) + " quedaron bien ");

console.log("estos numeros " + 2 + 6 + 10 + 50 + " son concatenados");

console.log(20 + 30 * 5 / 2 - 5);

//////////// SOLUCIÓN DE SENTENCIAS  //////////////////////////////////////////////////////// 

let usuario = "gerente";
let clave = "102030";
let activo = true;

if ((usuario === "gerente" || usuario === "admin") && clave === "102030" && activo) {
   console.log("Acceso exitoso ");
} else {
   console.log("Acceso denegado");
}

/////////////////////////////////////////////////////////////////////////////////////////////

let genero = "mujer";
let edad = 18;
let sobria = true;
let experiencia = true;

if (genero === "mujer" && edad >= 18 && sobria && experiencia) {
   console.log("Si puede trabajar");
} else {
   console.log(" No nos llame, nosotros la llamamos ");
}


/////////////////////////////////////////////////////////////////////////////////////////////

let edades = 25;
let tieneEntradas = true;
let esFamoso = true;
let entradaPagada = true;

if ((edades >= 18 && entradaPagada) && (tieneEntradas || esFamoso)) {
   console.log(" Bienvenido al área VIP");
} else {
   console.log(" No es posible ingresar al área VIP");
}

/////////////////////////////////////////////////////////////////////////////////////////////

let especie = "perro";
let vacunado = true;
let esterilizado = true;
let comportamientoBueno = false;

if (
   (especie === "perro" || especie === "gato") && vacunado && (esterilizado || comportamientoBueno)
) {
   console.log(" Puede ser adoptado");
} else {
   console.log(" Lo lamento aún no cumple los requisitos de adopción");
}

/////////////////////////////////////////////////////////////////////////////////////////////

let hayLuz = true;
let temperaturaAlta = false;
let interruptorVentilador = true;
let modoAutomatico = false;

if ((hayLuz && temperaturaAlta && interruptorVentilador) || modoAutomatico) {
   console.log(" El ventilador se enciende");
} else {
   console.log(" El ventilador permanece apagado");
}

////////////////// SOLUCION TRIKI //////////////////////////////////////////////////

// Crear la matriz vacia
let triki = [[], [], []];

// Llenamos con "X" usando for anidados y length
for (let fila = 0; fila < triki.length; fila++) {
   for (let columna = 0; columna < 3; columna++) { // 3 columnas por fila
      triki[fila][columna] = "X";
   }
}

// Mostrar el tablero
console.log("Tablero Triki:");
for (let i = 0; i < triki.length; i++) {
   console.log(triki[i].join(" | "));
}




// TAREA 1: ahora que nos imprima todas la tablas de multiplicar. HECHO

// TAREA 2: con los array que tenemos  si agregamos 1 valor mas al array no debe salir nan u nulo,
// debe salir el valor que queda, FALTA

//const secuenciaUno = [2, 5, 10, 30, 25, 52, 7, 3, 41, 15, 70,   6,7]; aqui agregamos 2 numeros mas y debe imprimir 6 . y 7 y no null
//const secuenciaDos = [14, 40, 2, 55, 10, 39, 28, 9, 27, 56, 1];

// TAREA 3 : crear 8 ejemplos de precendencia con strings, numeros. ( * / - +) 
// TAREA 4 : crear 5 condiciones utilizando el if y else que sean de mas de 3 sentencias, ( && || ) e intercaladas. 

// crear el triki y con for llenar solo con X, se utiliza una matriz, y clave un for dentro del otro for 
//IMPORTANTE: Ahora se imprime en la misma consola con node y el nombre del archivo


//IMPORTANTE: Ahora se imprime en la misma consola con node y el nombre del archivo , debo instalarlo. HECHO


// PARCIAL
////////////////////////////////////////////////////////////////////////////////////////////////


const trikiDiagonal = [
   ["", "", "", ""],
   ["", "", "", ""],
   ["", "", "", ""],
   ["", "", "", ""],
];


for (let i = 0; i < trikiDiagonal.length; i++) {
   for (let j = 0; j < trikiDiagonal.length; j++) {
      if (i === j) {
         trikiDiagonal[i][j] = "X";
      }
   }
}

console.log("triki", trikiDiagonal);




// // Resultado // //
const trikiResultado = [
   ["x", "", ""],
   ["", "x", ""],
   ["", "", "x"],
];
for (let i = 0; i < trikiResultado.length; i++) {
   console.log(trikiResultado[i].join(" | "));
}

//////////////////////   SUDOKU   //////////////////////////////////////////////

const sudoku = [
   ["", "", ""],
   ["", "", ""],
   ["", "", ""],
   ["", "", ""],
];

let num = 1;

for (let i = 0; i < sudoku.length; i++) {
   for (let j = 0; j < sudoku[i].length; j++) {
      sudoku[i][j] = num;
      num++;
   }
   console.log("sudoku", sudoku[i].join(" | "));

}

// Condición sudoku[i] = "Mientras j sea menor que la cantidad de columnas en la fila i".
// sudoku.length nos da el número de filas que son 4.
// sudoku[i].length nos da el número de columnas de la fila i que son 3 

const cars =
   [["BMW", "Volvo", "Saab"],
   ["Ford", "Fiat", "Audi"],
   ["Lambo", "Renault", "Honda"]];


let text = "";
for (let i = 0; i < cars.length; i++) {
   for (let j = 0; j < cars.length; j++) {
      if (j = cars.length - 1) {
         text += " " + cars[i][j];
      }
   }
}
console.log(text);

const carros =
   [["BMW", "Volvo", "Saab"],
   ["Ford", "Fiat", "Audi"],
   ["Lambo", "Renault", "Honda"]];


let carro = "";
for (let i = 0; i < carros.length; i++) {
   for (let j = 0; j < carros.length; j++) {
      if (i == 0 || j == carros.length - 1 || j == 0 || i == carros.length - 1) {
         carro += " " + carros[i][j];
      }
   }
   console.log(carros[i].join("|"));
}


// TAREA: imprimir la matriz para que se vea como una matriz 