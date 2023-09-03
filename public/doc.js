import { emitir, selecionandoDoc } from "./socket-front-doc.js";

const parametros = new URLSearchParams(window.location.search)//pega todos os parametros da url
const nomeDoc = parametros.get("nome"); // pega o conteudo do parametro nome da url

const textoEditor = document.getElementById("editor-texto"); //capturando o campo de texto do usuario
const tituloDoc = document.getElementById("titulo-documento");

tituloDoc.textContent = nomeDoc || "Documento sem Titulo"

selecionandoDoc(nomeDoc)

textoEditor.addEventListener("keyup", () => { //atribuindo evento no campo selecionado sempre que o usuario soltar uma teclar (keyup)
     emitir({
          texto: textoEditor.value,
          nomeDoc,
     })
})

function atualizaTextoEditor(texto) {
     textoEditor.value = texto
}

export { atualizaTextoEditor }