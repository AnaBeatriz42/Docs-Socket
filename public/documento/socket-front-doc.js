import { alertRedirecionar, atualizaTextoEditor, tratarAuth, attInterface } from "./doc.js";
import { obterToken } from "../utils/cookies.js";

const socket = io("/usuarios", {
     auth: {
          token: obterToken("token")
     }
});


socket.on("autoriza_sucesso", tratarAuth);

socket.on("connect_error", (error) => {
     alert(error)
     window.location.href = "/login/index.html";
})

function selecionandoDoc(dadosEntrada) {

     socket.emit("selecionando_doc", dadosEntrada, (texto) => {
          atualizaTextoEditor(texto)
     })
}

socket.on("user_no_documento", () => {
     alert("Docuemnto já aberto em outra pagina")
     window.location.href = "/"
})

socket.on("user-documento", (data) => {
     console.log("Evento user-documento recebido:", data);
     attInterface(data);
});

function emitir(dados) {
     socket.emit("texto_editor", dados);
}

socket.on("escrevendo", (res) => {
     atualizaTextoEditor(res)
})

function excluirEmit(nome) {
     socket.emit("excluindo-doc", nome);
}

socket.on("sucessos-excluir", (nome) => {
     alertRedirecionar(nome)
})


export { emitir, selecionandoDoc, excluirEmit }