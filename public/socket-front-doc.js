import { atualizaTextoEditor } from "./doc.js";

const socket = io(); //emitindo para o backend uma entrada no front 

function selecionandoDoc(nome) {
     socket.emit("selecionando_doc", nome)
}

function emitir(dados) {
     socket.emit("texto_editor", dados);
    
}

socket.on("escrevendo", (res) => { //ouvindo o evento emitido pelo back
     atualizaTextoEditor(res)
})
export { emitir, selecionandoDoc }