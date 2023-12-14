import { alertRedirecionar, atualizaTextoEditor } from "./doc.js";

const socket = io();

function selecionandoDoc(nome) {
     socket.emit("selecionando_doc", nome, (texto) => {
          atualizaTextoEditor(texto)
     })
}

function emitir(dados) {
     socket.emit("texto_editor", dados);
}

socket.on("escrevendo", (res) => {
     atualizaTextoEditor(res)
})

function excluirEmit(nome) {
     socket.emit("excluindo-doc", nome);
}

socket.on("sucessos-excluir", (nome) =>{
     alertRedirecionar(nome)
})


export { emitir, selecionandoDoc, excluirEmit }