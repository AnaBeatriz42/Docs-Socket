import { addoc, attDocumento, encontrarDoc, obterDoc } from "./docDb.js";
import io from "./servidor.js"


io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("obter_doc", async (devolverDoc) => {

    console.log("solicitando os documentos do banco")
    const documentos = await obterDoc();
    console.log(documentos)
    devolverDoc(documentos)
  })


  socket.on("add-documento", async (nome) => {
    const docExiste = await (encontrarDoc(nome)) !== null;
    if (docExiste) {
      socket.emit("doc-existe", nome);
    } else {
      const result = await addoc(nome)
      if (result.acknowledged) {
        io.emit("adicionado", nome)
      }
    }

  })

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




