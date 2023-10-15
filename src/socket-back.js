import { attDocumento, encontrarDoc } from "./docDb.js";
import io from "./servidor.js"


io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("selecionando_doc", async (nome, callback) => {
    socket.join(nome)
    const documento = await encontrarDoc(nome)
    if (documento) {
      callback(documento.texto)
    }
  })

  socket.on("texto_editor", async ({ texto, nomeDoc }) => {
    const documento = await attDocumento(nomeDoc, texto)
    console.log(documento)
    if (documento.modifiedCount) {
      socket.to(nomeDoc).emit("escrevendo", texto);
    }
  })
});




