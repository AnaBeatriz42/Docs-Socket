import { definirCookie } from "../utils/cookies.js"
const socket = io();

function emitirAutenticarUser(dados) {
     socket.emit("autenticando_usuario", dados)
}

socket.on("auth_sucesso", (token) => {
     definirCookie("token", token);
     alert("Autenticação realizada com sucesso")
     window.location.href = '/'
})
socket.on("auth_error", () => alert("Falha na autenticação"))
socket.on("user_not_encontrado", () => alert("Usuario não encontrado"))


export { emitirAutenticarUser }