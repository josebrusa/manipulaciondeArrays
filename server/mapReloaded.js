const orders = [
    {
        customerNames: 'jose',
        total: 24,
        delivered: true,
    },
    {
        customerNames: 'eva',
        total: 94,
        delivered: true,
    },
    {
        customerNames: 'cata',
        total: 120,
        delivered: false,
    },
    {
        customerNames: 'miqueas',
        total: 211,
        delivered: true,
    },
];

// console.log('original orders', orders);
// const rta = orders.map(i => i.total);
// // console.log('rta', rta);


// example add argument al obejct

// const rta2 = orders.map((i) => {
//     i.tax = 0.19;
//     return i;
// });
// console.log('Original', orders);
// console.log('Order modify rta2', rta2);

const rta3 = orders.map((i) => {
    return {
        ...i,
        tax: .19
    }
});

console.log('Original orders', orders);
console.log('Modify rta', rta3);