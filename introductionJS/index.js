//Template Strings
let nombre = "Andres"
let apellido = "Quintero"
console.timeLog(`Nombre: ${nombre} Apellido: ${apellido}`)


//Referenciar el div
const div = document.getElementById("app")

//Adicionar texto
div.innerText = 'Hola mundo desde java script'
//Adicionar codigo html
div.innerHTML = `
  <h2>Grupo 24</h2>
  <h4>Indroduccion a HTML con Js</h4>
  <p>Esto es un ejemplo de un parrafo desde Js</p>
`