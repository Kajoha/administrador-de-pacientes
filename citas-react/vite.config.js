import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

/* JSX - JavaScript Syntax Extension, es una extensión del lenguaje desarrollado por meta
para react, basicamente es un template de HTML pero tiene todas las funciones de JavaScript 
una vez compilado son archivos de JavaScript con funciones y objetos*/

/*Reglas  
 - una etiqueta si tiene apertura, obligatoriamente tiene que cerrar, si la etiqueta no requiere cierre
 como img, debe cerrarse con /> <img /> <input />
 - cada componente debe tener un return
 - vite requiere obligatoriamente que termine en .jsx
 - Cuando retornas multiples elementos debes tener un padre que los rodee, ejemplo un div
 siempre hay que retornar un elemento en el nivel más alto, pero para no hacer un div, cada vez 
 en react existe <> </> que es como un div pero se llama fragme y no metes html de más
*/

/*
Mi documento de React se va a dividir en 2 partes, lo que esta antes del return (javaScript tal cual lo
  conozco) y lo que esta dentro del return que es lo que se va a ver pantalla
*/