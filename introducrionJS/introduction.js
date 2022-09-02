/**
 * VARIABLES
 */
//constante
const n1 = 10;

//variables
let n2 = 50
var n3 = 40
let flag = false

const suma = n1 + n2 + n3

//Mostrar datos por consola
console.log("Suma: "+ suma)

//Estructura de datos

let numeros = [10, 20, 30, 40, 50, 60]
console.log(numeros)
//Añadir elementos
numeros.push(70)
console.log(numeros)
//Eliminar ultimo elemento
numeros.pop()
//eliminar un elemento por su posicion
numeros.pop(2)
console.log(numeros)

//Iterar numeros
for(let i = 0; i < numeros.length; i++){
  console.log("Numeros->" + numeros[i])
}

//Objetos
let persona = {
  nombre: "Juliana",
  apellido: "Hernandez",
  edad: 28,
  telefono: ['123123123','12323']
}
//Impromir el objeto
console.log(persona)

//Acceder a los atributos
console.log(persona.nombre)
console.log(persona['apellido'])
//Obtener las llaves como un array
console.log(Object.keys(persona)) 
//Imprimir valores de un objeto
let values = Object.values(persona)
for(let i = 0; i < values.length; i++){
  console.log()
}
