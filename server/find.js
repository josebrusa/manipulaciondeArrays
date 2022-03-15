const numbers = [1, 23, 45, 67, 32, 43, 30];
let rta = undefined;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === 30) {
        rta = element;
        break;
    }
}

console.log('realizado con un ciclo for', rta);

const rta2 = numbers.find(i => i === 45);

console.log('rta2 realizado con el metodo find', rta2);


const products = [{
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];


const food = products.find(i => i.id === '🌭');
console.log('me pedi un ', food);

const food2 = products.findIndex(i => i.id === '🥞');
console.log('me pedi un ', food2);
