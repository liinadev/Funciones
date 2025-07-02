// crear funcion que ordene números de menor a mayor 
function ordenarMenorAMayor(numeros) {
    return numeros.sort(function (a, b) {
        return a - b
    }
    );
}

let numeros = [50, 45, 7, 10, 11, 3, 20, 41, 27, 21, 19, 1, 25];
console.log(numeros);
const ordenMenor = ordenarMenorAMayor(numeros);
console.log(ordenMenor);

const numeroMayor = numeros.filter(function (numero) {
    return numero > 20
})
console.log(numeroMayor);

//Desarrollo de la Tarea

let nombres = ["camila", "tatiana", "andres", "violeta", "lina", "sergio", "zuly", "manuel", "ximena", "jesus"];
console.log("array original", nombres);

const nombresAlfabeticamente = nombres.toSorted(function (a, b) {
    return a.localeCompare(b);
});
console.log("array ascendente", nombresAlfabeticamente);

const invertidos = nombresAlfabeticamente.toReversed();
console.log("array descendente", invertidos);


const names = [
    { nombre: "ximena", apellido: "osorio", edad: 38 },
    { nombre: "tatiana", apellido: "jimenez", edad: 18 },
    { nombre: "violeta", apellido: "alameda", edad: 27 },
    { nombre: "lina", apellido: "cruz", edad: 25 },
    { nombre: "sergio", apellido: "parra", edad: 29 },
    { nombre: "zuly", apellido: "bocanegra", edad: 36 },
    { nombre: "andres", apellido: "santamaria", edad: 23 },
    { nombre: "camila", apellido: "robles", edad: 31 },
    { nombre: "jesus", apellido: "quiñones", edad: 40 },
]
console.log("array de objetos original", names);

const ordenNombre = names.toSorted(function (a, b) {
    return a.nombre.localeCompare(b.nombre);
});
console.log("array ascendente", ordenNombre);


const nombresInvertidos = ordenNombre.toReversed();
console.log("array descendente", nombresInvertidos);

const apellidos = names.toSorted(function (a, b) {
    return a.apellido.localeCompare(b.apellido);
});
console.log("array apellido", apellidos);

const edades = names.toSorted(function (a, b) {
    return a.edad - (b.edad);
});
console.log("array edades", edades);

// hacer un map de de z-a (agregar nueva propiedad  estatura 30-200 cm)



function agregarPropiedad() {
    return nombresInvertidos.map(function (persona) {
        let miNumeroAlAzar = Math.floor(Math.random() * (210 - 30 + 1)) + 30;
        return {
            nombre: persona.nombre,
            apellido: persona.apellido,
            edad: persona.edad,
            estatura: miNumeroAlAzar
        };
    });
}
const estatura = agregarPropiedad();
console.log("array nueva estatura", estatura);

// agregar nueva propiedad resumen, decir la persona ... apellido.. 
function agregarNuevaPropiedad() {
    return estatura.map(function (persona) {
        let miResumen = "mi nombre es " + persona.nombre + " y mi apellido " + 
        persona.apellido + " tengo " + persona.edad + " años, mi estatura es de " +
        persona.estatura + " y mi profesion es Administradora Financiera" 
            return {
            nombre: persona.nombre,
            apellido: persona.apellido,
            edad: persona.edad,
            estatura: persona.estatura,                  
            resumen: miResumen
        };
    });
}
const TotalREsumen = agregarNuevaPropiedad();
console.log("array resumen", TotalREsumen);