import  jwt  from "jsonwebtoken"

function gerarJWT(data) {
     const token = jwt.sign(data, process.env.SECRET , {
          expiresIn:'1h'
     })
     return token;
}


export { gerarJWT }