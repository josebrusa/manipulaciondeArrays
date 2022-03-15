const numbers = [321, 213, 231, 23, 2, 1, 1, 2, 3, 4, 3, 1];

let rta = false
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
};

console.log(rta);
// devuelve true

// utilizando some

const rta2 = numbers.some(item => item % 2 === 0);
console.log('utilizando Some', rta2);

const orders = [{
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

const entregado = orders.some(item => item.delivered);
console.log('Entregado', entregado);



