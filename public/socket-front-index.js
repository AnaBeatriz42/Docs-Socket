import { inserirLinkDocumento, removerLinkDocumento } from "./index.js";
import { obterToken } from "./utils/cookies.js";

const socket = io("/usuarios",{
     auth: {
          token: obterToken("token")
     }
});

socket.on("connect_error", (error) => {
     alert(error)
     window.location.href = "/login/index.html";
})

socket.emit("obter_doc", (documentos) => {
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

socket.on("sucessos-excluir", (nome) => {
     removerLinkDocumento(nome)
})

export { addDocumento }

