import io from "./servidor.js"

io.on("connection", (socket) => { // cada conxao feita pela aplicacao
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("texto_editor",(res) => { //ouvindo o evento emitido pelo front 
     // console.log(res)
     socket.broadcast.emit("escrevendo", res)
  })
});

