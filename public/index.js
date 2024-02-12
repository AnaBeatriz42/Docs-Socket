import { addDocumento } from "./socket-front-index.js";
import { obterToken, limparCookie } from "./utils/cookies.js"

const token = obterToken('token')
console.log(token)
const listDoc = document.getElementById("lista-documentos")
const form = document.getElementById("form-adiciona-documento")
const imput = document.getElementById("input-documento")
const botaoLogout = document.getElementById("botao-logout")

botaoLogout.addEventListener("click", () => {
  limparCookie("token");
  alert("Usuario deslogado com sucesso!")
  window.location.href = "/login/index.html"
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  console.log(imput.value);
  addDocumento(imput.value);
  imput.value = "";
});

function inserirLinkDocumento(nomeDoc) {
  console.log(nomeDoc)
  listDoc.innerHTML += `
       <a
       href="/documento/index.html?nome=${nomeDoc}"
         class="list-group-item list-group-item-action"
        id="documento-${nomeDoc}"
       >
         ${nomeDoc}
       </a>
     `;
}

function removerLinkDocumento(nomeDoc) {
  const doc = document.getElementById(`documento-${nomeDoc}`)
  listDoc.removeChild(doc)
}

export { inserirLinkDocumento, removerLinkDocumento }