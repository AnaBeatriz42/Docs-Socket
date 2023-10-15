import { inserirLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_doc", (documentos) => {
     console.log(documentos)
     documentos.forEach((documento) => {
          inserirLinkDocumento(documento.nome)
     })
});

function addDocumento(nome) {
     socket.emit("add-documento", nome)
}

socket.on("adicionado", (nome) => {
     inserirLinkDocumento(nome)
})

socket.on("doc-existe", (nome) => {
    alert(`o Documento ${nome} já existe!`)
})

export { addDocumento }

