let contadorPedidos = 1;

let produtos = [
    { nome: 'Mouse', quantidade: 20 },
    { nome: 'Teclado', quantidade: 100 }
];

let pedidos = [];

function realizarPedido(nome, produto, quantidade) {
    if (produtos.length === 0) {
      console.log("Não há produtos para realizar o pedido!");
      return;
    }

  for (let i = 0; i < produtos.length; i++) {
  
    if (produtos[i].nome === produto) {
      if (produtos[i].quantidade > 0 && produtos[i].quantidade >= quantidade) {
        pedidos.push({
          idPedido: contadorPedidos,
          cliente: nome,
          itens: [
            { nome: produto, quantidade }
          ]
        });
        produtos[i].quantidade -= quantidade;
        contadorPedidos ++;
        console.log("Pedido realizado!");
      } else {
        console.log(`Quantidade insuficiente do produto ${produto} para realizar o pedido!`);
      }
      
      return; // Finaliza aqui se achou o produto  
      
    }
  }
  // <- só cai aqui se não encontrou nenhum produto
  console.log(`O produto ${produto} não foi encontrado!`);
  
}

console.log("Realizando pedido...");
realizarPedido('Maria', 'Mouse', 10);
console.log("=========================");
console.log("Listando pedidos:");
console.log(pedidos);

console.log("=========================");
console.log("Realizando pedido...");
realizarPedido('Rodrigo', 'Teclado', 102);
console.log("=========================");
console.log("Listando pedidos:");
console.log(pedidos);
