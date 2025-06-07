    let products = [
        { name: 'Fralda', amount: 80 },
        { name: 'Babá Eletrônica', amount: 5 }
    ];

    let orders = [];


    function makeOrder(name, product, amount) {  
        
        for (i = 0; i < products.length; i++) {
            if (products[i].name === product) {

                if (products[i].amount > 0 && products[i].amount >= amount) {
                    orders.push({
                        customer: name, 
                        itens: [
                            { name: product, amount: amount }
                        ]
                    });
                    
                    products[i].amount -= amount;
                    console.log("Order completed!");
                    
                } else {
                    console.log(`insufficient stock of product ${product}. Order not completed!`);
                }

                return; // Finaliza aqui se achou o produto            
            }         
        }
        // <- só cai aqui se não encontrou nenhum produto
        console.log(`Produto ${product} não encontrado.`);

    }

    console.log("Make order...");
    makeOrder("David", "Fralda", 50);

    console.log("===========================");
    console.log("Orders list:");
    console.log(orders);

    console.log("===========================");

    console.log("Make order...");
    makeOrder("Olivia", "Babá Eletrônica", 4);

    console.log("===========================");
    console.log("Orders list:");
    console.log(orders);

    console.log("===========================");
    console.log("Products list:");
    console.log(products);
