import jwt from "jsonwebtoken";

function autorizar(socket, next) {
     const token = socket.handshake.auth.token;

     try {
          const payload = jwt.verify(token, process.env.SECRET);
          socket.emit('autoriza_sucesso', payload);
          next();
     } catch (err) {
          next(err);
     }
}

export default autorizar 