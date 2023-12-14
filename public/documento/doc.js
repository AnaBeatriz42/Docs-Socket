import { emitir, excluirEmit, selecionandoDoc } from "./socket-front-doc.js";

const parametros = new URLSearchParams(window.location.search)
const nomeDoc = parametros.get("nome");

const textoEditor = document.getElementById("editor-texto");
const tituloDoc = document.getElementById("titulo-documento");
const excluirDoc = document.getElementById("excluir-documento");

tituloDoc.textContent = nomeDoc || "Documento sem Titulo"

selecionandoDoc(nomeDoc)

textoEditor.addEventListener("keyup", () => {
     emitir({
          texto: textoEditor.value,
          nomeDoc,
     })
})

function atualizaTextoEditor(texto) {
     textoEditor.value = texto
}

excluirDoc.addEventListener("click", () => {
     excluirEmit(nomeDoc)
})

function alertRedirecionar(nome) {
     if (nome == nomeDoc) {
          alert(`Documento ${nome} excluido com sucesso!`);
          window.location.href = "/";
     }
}

export { atualizaTextoEditor, alertRedirecionar }