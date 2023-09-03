import { emitir } from "./socket-front-doc.js";

const textoEditor = document.getElementById("editor-texto"); //capturando o campo de texto do usuario

textoEditor.addEventListener("keyup", () => { //atribuindo evento no campo selecionado sempre que o usuario soltar uma teclar (keyup)
     emitir(textoEditor.value)
})

function atualizaTextoEditor(texto){
     textoEditor.value = texto 
}

export {atualizaTextoEditor}