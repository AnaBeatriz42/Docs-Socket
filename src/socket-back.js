import io from "./servidor.js"

const docs = [{
  nome: "JavaScript",
  texto: "texto de javaScript"
}, {
  nome: "Node",
  texto: "texto de Node"
},
{
  nome: "Socket.io",
  texto: "texto de Socket.io"
}]

io.on("connection", (socket) => { // cada conxao feita pela aplicacao
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("selecionando_doc", (nome,callback) => {
    socket.join(nome) // o metodo join do socket basicamente junta o usuario que esta na conexao e o insere em uma sala agrupando 
    
    const documento = encontrarDoc(nome) 
    if(documento){
      callback(documento.texto)
    }
  })

  socket.on("texto_editor", ({ texto, nomeDoc }) => { //ouvindo o evento emitido pelo front 
    const documento = encontrarDoc(nomeDoc)
    if(documento){
      documento.texto = texto
      socket.to(nomeDoc).emit("escrevendo", texto);
    }
  })
});


function encontrarDoc(nome){
  const document = docs.find((documento) => {
    return documento.nome == nome
  })
  return document
}

