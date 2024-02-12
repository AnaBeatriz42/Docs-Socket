import "dotenv/config";

import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventoLogin from "./registrarEventos/login.js";
import autorizar from "./middlewares/autorizarUser.js";
import io from "./servidor.js"

const nspUser = io.of("/usuarios")

nspUser.use(autorizar);

nspUser.on("connection", (socket) => {
  registrarEventosInicio(socket, io);
  registrarEventosDocumento(socket, io);
});

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);
  registrarEventosCadastro(socket, io);
  registrarEventoLogin(socket, io);
});




