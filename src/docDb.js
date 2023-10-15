import { text } from "express";
import { documentos } from "./dbConnect.js";

function encontrarDoc(nome) {
     const document = documentos.findOne({ nome })
     return document
}

function attDocumento(nome, texto){
     const att = documentos.updateOne({nome},{$set:{texto:texto}})
     return att
}
export { encontrarDoc , attDocumento }