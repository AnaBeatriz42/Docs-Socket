import { addoc, encontrarDoc, obterDoc, } from "../db/docDb.js";

function registrarEventosInicio(socket, io) {
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
}

export default registrarEventosInicio;