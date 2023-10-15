import { atualizaTextoEditor } from "./doc.js";

const socket = io();

function selecionandoDoc(nome) {
     socket.emit("selecionando_doc", nome,(texto) =>{
          atualizaTextoEditor(texto)
     })
}

function emitir(dados) {
     socket.emit("texto_editor", dados);   
}

socket.on("escrevendo", (res) => { 
     atualizaTextoEditor(res)
})
export { emitir, selecionandoDoc }