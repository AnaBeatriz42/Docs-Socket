import { text } from "express";
import { documentos } from "./dbConnect.js";

function encontrarDoc(nome) {
     const document = documentos.findOne({ nome })
     return document
}

function attDocumento(nome, texto) {
     const att = documentos.updateOne({ nome }, { $set: { texto: texto } })
     return att
}

function obterDoc() {
     const docuemntos = documentos.find().toArray();
     return docuemntos;
}

function addoc(nome) {
     const res = documentos.insertOne({ nome, texto: "" })
     return res;
}

function removeDoc(nome){
     const res = documentos.deleteOne({nome})
     return res;
}

export { encontrarDoc, attDocumento, obterDoc, addoc, removeDoc }