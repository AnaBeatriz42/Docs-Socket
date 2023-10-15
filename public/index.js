import { addDocumento } from "./socket-front-index.js";
const listDoc = document.getElementById("lista-documentos")
const form = document.getElementById("form-adiciona-documento")
const imput = document.getElementById("input-documento")

form.addEventListener("submit", (evento) => {
     evento.preventDefault();
     console.log(imput.value);
     addDocumento(imput.value);
     imput.value = "";
});

function inserirLinkDocumento(nomeDoc) {
     listDoc.innerHTML += `
       <a
         href="documento.html?nome=${nomeDoc}"
         class="list-group-item list-group-item-action"
       >
         ${nomeDoc}
       </a>
     `;
}





export { inserirLinkDocumento }