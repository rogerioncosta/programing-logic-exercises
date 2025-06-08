produtos = [];

function cadastrarProduto(nome, quantidade) {

    for(let i = 0; i < produtos.length; i++) {
      if(produtos[i].nome === nome) {
        console.log("Cadastrando produto existente!")
        produtos[i].quantidade += quantidade;
        console.log("Produto Existente, somente a quantidade foi atualizada!")
        return;
      } 
      
    }
    
    produtos.push({
      nome,
      quantidade
    });
    
    console.log("Produto cadastrado!");
}

function venderProduto(nome, quantidadeVendida) {
  for(let i = 0; i < produtos.length; i++) {
    if(produtos[i].nome === nome) {
      if(quantidadeVendida <= produtos[i].quantidade) {
        produtos[i].quantidade = produtos[i].quantidade - quantidadeVendida;
        console.log(`Venda do produto ${produtos[i].nome} realizada e estoque atualizado`);
      } else {
        console.log(`Estoque do produto ${produtos[i].nome} insuficiente para a quantidade informada.`);
      }
    }
  }
}

function listarProdutos() {
  for(let i = 0; i < produtos.length; i++) {
    console.log(`Produto: ${produtos[i].nome} - Quantidade: ${produtos[i].quantidade}`)
  }
}

console.log("=============================");
cadastrarProduto("baba eletronica", 5);
cadastrarProduto("fralda", 50);

console.log("=====Listando Produtos===============");
listarProdutos();

console.log("===================================");
console.log("Venda de produto:");
venderProduto('baba eletronica', 2);

console.log("====================================");
console.log("=====Listando Produtos==============");
listarProdutos();;
