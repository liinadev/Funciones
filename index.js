function esPar (numero){
 return numero % 2==0 ;
}
  const respuesta = esPar (10);
console.log (respuesta);

// si la palabra es palindrome muestra True, de lo contrario muestra False 
function es_palindroma (palabra){
  const limpia = palabra.toLowerCase();
  const reversa = limpia.split("").reverse().join("");
  return limpia === reversa;
  // mango - ognam
  // ada - ada 
  // oso - oso
  // ala - ala
  // oro - oro 
  // reconocer - reconocer
}

const siEs = es_palindroma("reconocer");
console.log (siEs);

// for (inicialización; condición; incremento) {código a ejecutar}
// La expresión 1 establece una variable antes de que comience el bucle (sea i = 1).
// La expresión 2 define la condición para que se ejecute el bucle (i debe ser menor que 5).
// La expresión 3 aumenta un valor (i++) cada vez que se ejecuta el bloque de código en el bucle.
// Si la expresión 2 devuelve verdadero, el bucle comenzará de nuevo. Si devuelve falso, el bucle finalizará.
// el console.log debe ir dentro del bucle; no se puede llamar fuera del bucle 

function imprimir_rango (n){
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
};
  imprimir_rango(10);
  

// creamos 2 variables que representan los 2 primeros numeros de la secuencia 
// inicia un bucle que se ejecutara (n) veces, En cada iteración, se generará y mostrará un número de la secuencia.
// la variable i controla la cantidad de veces que se ejecuta el bloque de código dentro del bucle
// imprime el valor de (a) actual, que es el siguiente numero en la secuencia
// Actualiza el valor de (a) al valor actual de (b). y queda listo para la siguiente iteracion 
// actualiza el valor calculado en temporal. 

function fibonacci (n) {
  let primerNumero = 0, segundoNumero = 1;  
    for (let i = 0; i < n; i++){
      console.log(primerNumero);
      let temporal = primerNumero + segundoNumero;
      primerNumero = segundoNumero;
      segundoNumero = temporal;
      }
}
    fibonacci (10);



// utlizar ciclo for
// utiliar ciclos o las posiciones de la array



// numeros de 10 en 10 hasta 100. 

function numeros(n) {
    for (let i = 10; i <= 100; i += 10 ){
      console.log(i);
      }
}
 numeros(100);

// forEach() es un método que recorre cada elemento del array y ejecuta una función para cada uno.
// planta representa el elemento actual del array (un string como "bonsay"
function mostrarPlantas () { 
  const plantas = ["bonsay", "cactus", "rosa", "girasol"];
  plantas.push ("flor");
  console.log(plantas);
  const conteoLetras = function(planta) {
    console.log(planta + " tiene " + planta.length + " letras ");
  }

  plantas.forEach(conteoLetras);
}
  mostrarPlantas();


function rango(inicio,fin) {
    for (let i = inicio; i <= fin; i += 10) {
      console.log(i);
      }
}
 rango(20,100);

  const colores = [
    {color: "amarillo", esPrimario: true},
    {color: "cafe", esPrimario: false}, 
    {color: "azul", esPrimario: true},
    {color: "aguamarina", esPrimario: false},
    {color: "rojo", esPrimario: true},
    {color: "verde", esPrimario:false}
  ];
  console.log(colores);

function coloresPrimarios() {
  let coloresFiltrados = colores.filter(color => color.esPrimario); 
  console.log(coloresFiltrados);
}

coloresPrimarios();

  const animales = [
    {animal: "abeja", edad: 7, peso: 0.1 }, 
    {animal: "bestia", edad: 10, peso: 6 },
    {animal: "cocodrilo", edad: 5, peso: 15 },
    {animal: "dinosaurio", edad: 20, peso: 13 },
    {animal: "elefante", edad: 30, peso: 50 },
    {animal: "foca", edad: 8, peso: 6.5 },
    {animal: "jaguar", edad: 18, peso: 30 },
    {animal: "hipopotamo", edad: 11, peso: 14 },
    
  ]

  const animalesPocoPeso = animales.filter(function (animal){ 
    return animal.peso < 20; 
  })
  console.log(animalesPocoPeso);

  const animalesMasPeso = animales.filter(function (animal){
    return animal.peso < 12;
  })
  console.log(animalesMasPeso);

