import { atualizaTextoEditor } from "./doc.js";

const socket = io(); //emitindo para o backend uma entrada no front 

function emitir(texto) {
     socket.emit("texto_editor", texto)
}

socket.on("escrevendo", (res) => { //ouvindo o evento emitido pelo back
     atualizaTextoEditor(res)
})
export {emitir}