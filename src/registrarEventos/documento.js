import { attDocumento, encontrarDoc, removeDoc } from "../db/docDb.js";

function registrarEventosDocumento(socket, io){
     
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
 
   socket.on("excluindo-doc", async (nome) => {
     const documento = await removeDoc(nome)
     if (documento.deletedCount) {
       io.emit("sucessos-excluir", nome);
     }
 
   })
}

export default registrarEventosDocumento;