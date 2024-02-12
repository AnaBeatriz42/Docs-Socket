function definirCookie(chave, valor) {
     // console.log(chave,valor)
     document.cookie = `${chave}=${valor};path=/`;
}

function obterToken(chave) {
     return document.cookie
          .split("; ")
          .find((cookie) => cookie.startsWith(`${chave}=`))
          ?.split("=")[1];
}

function limparCookie(chave) {
     document.cookie = `${chave}=; expires=Thu, 01 Jan 1970 00:00:00`;
}
export { definirCookie, obterToken, limparCookie };