import { emitir, excluirEmit, selecionandoDoc } from "./socket-front-doc.js";

const parametros = new URLSearchParams(window.location.search)
const nomeDoc = parametros.get("nome");
// console.log(nomeDoc)

const textoEditor = document.getElementById("editor-texto");
const tituloDoc = document.getElementById("titulo-documento");
// console.log("Titulo do documento", tituloDoc)
const excluirDoc = document.getElementById("excluir-documento");
const listUser = document.getElementById("usuarios-conectados")
console.log(listUser)

tituloDoc.textContent = nomeDoc || "Documento sem Titulo"


function tratarAuth(payload) {
     selecionandoDoc({ nomeDoc, nomeUser: payload.nome })
}

function attInterface(userDocs) {
     console.log("entrando na função")
     listUser.innerHTML = "";
     console.log(userDocs)
     userDocs.forEach((usuario) => {
          listUser.innerHTML += `
            <li class="list-group-item">${usuario}</li>
          `;
        });
}

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

export { atualizaTextoEditor, alertRedirecionar, tratarAuth, attInterface }