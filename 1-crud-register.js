let estoque = [];

function cadastrarProduto(nome, quantidade) {
  estoque.push({nome: nome, quantidade: quantidade});
  console.log(`O produto ${nome} foi cadastrado com sucesso!`);
}

function listarProdutos() {
  for(let i = 0; i < estoque.length; i++) {
    console.log(`Nome: ${estoque[i].nome} - Qtde: ${estoque[i].quantidade}`);
  }
}

function listarProduto(nome) {
  for(let i = 0; i < estoque.length; i++) {
    if(estoque[i].nome === nome) {
      console.log(`Listar Produto ${nome}: Nome: ${estoque[i].nome} - Qtde: ${estoque[i].quantidade}`);
    }
  }
}

function atualizarQuantidade(nome, novaQuantidade) {
  for(let i = 0; i < estoque.length; i++) {
    if(estoque[i].nome === nome){
      estoque[i].quantidade = novaQuantidade;
      console.log(`A quantidade do produto ${estoque[i].nome} foi atualizada com sucesso!`);
    }
  }
}

function removerProduto(nome) {
  for(let i = 0; i < estoque.length; i++) {
    if(estoque[i].nome === nome) {
      estoque.splice(i, 1);
      console.log(`O produto ${nome} foi removido com sucesso!`);
      break; // evita continuar o loop e ter erros
    }
  }
}

cadastrarProduto("Computador", 4);
cadastrarProduto("Mouse", 2);

console.log("Listar todos os produtos:");
listarProdutos();

listarProduto("Computador");

console.log("Atualização de Quantidade do produto:");
atualizarQuantidade("Mouse", 20);

console.log("Remoção de produto: ");
removerProduto("Computador");

console.log("Lista atualizada: ")
listarProdutos();
