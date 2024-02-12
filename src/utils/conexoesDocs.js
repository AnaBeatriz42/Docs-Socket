const listConexoes = [];

function encontrarConexao(nomeDoc, nomeUser){
     return listConexoes.find((conexao) => {
          return (
               conexao.nomeDoc === nomeDoc && conexao.nomeUser === nomeUser
          );
     });
}

function addConexao(conexao) {
     listConexoes.push(conexao)
     // console.log(listConexoes)
};

function obterUserDocs(nomeDoc) {
     return listConexoes
          .filter((conexao) => conexao.nomeDoc === nomeDoc)
          .map((conexao) => conexao.nomeUser)
};


function removerConexao(nomeDoc, nomeUser) {
     const indice = listConexoes.findIndex((conexao) => {
          return (
               conexao.nomeDoc === nomeDoc && conexao.nomeUser === nomeUser
          );
     })

     if (indice !== -1) {
          listConexoes.splice(indice, 1);
     }

     console.log(listConexoes)
}

export { addConexao, obterUserDocs, removerConexao, encontrarConexao}