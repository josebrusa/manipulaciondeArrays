const products = [
    {title: 'Pizza', price: '121', id:'🍕'},
    {title: 'Burger', price: '121', id:'🍔'},
    {title: 'HotCakes', price: '121', id:'🥞'},
];

const myProducts = [];
console.log('Products', products);
console.log('Mis Productos', myProducts);
console.log('-'.repeat(10));

const productIndex = products.findIndex(i => i.id === '🍔');
    if(productIndex !== -1){
        myProducts.push(products[productIndex])
        products.splice(productIndex, 1)
    }

    console.log('Products', products);
    console.log('Mis Productos', myProducts);
    console.log('-'.repeat(10));

    // Update

    const productsV2 = [
        {title: 'Pizza', price: '121', id:'🍕'},
        {title: 'Burger', price: '121', id:'🍔'},
        {title: 'HotCakes', price: '121', id:'🥞'},
    ];

    const update = {
        id:'🍔',
        changes : {
            price: 200,
            description: 'Delicius!'
        }
    }

    const producIndexV2 = productsV2.findIndex(i => i.id === update.id);
    productsV2[producIndexV2] = {
        ...productsV2[producIndexV2],
        ...update.changes,
    };

    console.log(productsV2);