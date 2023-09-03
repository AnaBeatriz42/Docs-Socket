import io from "./servidor.js"

io.on("connection", (socket) => { // cada conxao feita pela aplicacao
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("selecionando_doc", (nome) => {
    socket.join(nome) // o metodo join do socket basicamente junta o usuario que esta na conexao e o insere em uma sala agrupando 
  })

  socket.on("texto_editor", ({texto,nomeDoc}) => { //ouvindo o evento emitido pelo front 
    socket.to(nomeDoc).emit ("escrevendo", texto);
  })

});

