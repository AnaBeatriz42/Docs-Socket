import { scryptSync, timingSafeEqual } from "crypto"

function auteticarUser(senha, user) {
     const hash = scryptSync(senha, user.salSenha, 64)
     const hasReal = Buffer.from(user.hashSenha, "hex");
     const autenticado = timingSafeEqual(hash, hasReal)
     return autenticado;
}

export { auteticarUser }