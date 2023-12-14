import { usuarios } from "./dbConnect.js";
import criaHashESalSenha from "../utils/criarHaSenha.js";

function encontrarUsuario(nome) {
     return usuarios.findOne({ nome });
}

function cadastrarUsuario({ nome, senha }) {
     const { hashSenha, salSenha } = criaHashESalSenha(senha);
     return usuarios.insertOne({ nome, hashSenha, salSenha  });
}
 
export { cadastrarUsuario, encontrarUsuario }