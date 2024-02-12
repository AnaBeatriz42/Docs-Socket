import { attDocumento, encontrarDoc, removeDoc } from "../db/docDb.js";
import { addConexao, obterUserDocs, removerConexao, encontrarConexao } from "../utils/conexoesDocs.js";


function registrarEventosDocumento(socket, io) {

  socket.on("selecionando_doc", async ({ nomeDoc, nomeUser }, callback) => {
    const documento = await encontrarDoc(nomeDoc)

    if (documento) {
      const conexaoEncontrada = encontrarConexao(nomeDoc, nomeUser)

      if (!conexaoEncontrada) {
        socket.join(nomeDoc)

        addConexao({ nomeDoc, nomeUser })

        socket.data = {
          userEntrou: true
        }

        const userDocs = obterUserDocs(nomeDoc);
        socket.to(nomeDoc).emit("user-documento", userDocs)

        callback(documento.texto);
      } else {
        socket.emit("user_no_documento")
      }
    }

    socket.on("texto_editor", async ({ texto, nomeDoc }) => {
      const documento = await attDocumento(nomeDoc, texto)
      console.log(documento)
      if (documento.modifiedCount) {
        socket.to(nomeDoc).emit("escrevendo", texto);
      }
    })

    socket.on("excluindo-doc", async (nome) => {
      const documento = await removeDoc(nome)
      if (documento.deletedCount) {
        io.emit("sucessos-excluir", nome);
      }

    })

    socket.on("disconnect", () => {

      if (socket.data.userEntrou) {
        console.log(`Cliente ${socket.id} foi desconectado!`);
        removerConexao(nomeDoc, nomeUser)

        const userDocs = obterUserDocs(nomeDoc);
        socket.to(nomeDoc).emit("user-documento", userDocs)
      }
    });

  })
}

export default registrarEventosDocumento;