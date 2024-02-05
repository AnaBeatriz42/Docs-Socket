import { encontrarUsuario } from "../db/usersDb.js";
import { auteticarUser } from "../utils/auth.js";
import {gerarJWT } from "../utils/gerarJwt.js"

function registrarEventoLogin(socket, io) {
          socket.on("autenticando_usuario", async ({ nome, senha }) => {
               const user = await encontrarUsuario(nome)
               if (user) {
                    const autenticado = auteticarUser(senha, user)

                    if (autenticado) {
                         const jwt = gerarJWT({nome});
                         socket.emit("auth_sucesso", jwt)
                    } else {
                         socket.emit("auth_error")
                    }
               } else {
                    socket.emit("user_not_encontrado")
               }
          })
     }

export default registrarEventoLogin;

