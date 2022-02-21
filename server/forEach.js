    const products = [
    {   title: 'Burger', 
        price: 210,
    },
    {   title: 'Pizza', 
        price: 230,
    },
];
    
    const app = document.getElementById("root");
    console.log(app.innerHTML);
    products.forEach(food => {
    app.innerHTML += `<li><ul>${food.title} - ${food.price}</ul></li>`
});

// example for and foreach

const letters = ['a','b','c',['d','e','f']];
const ej1 = document.getElementById("ej1");

for (let i = 0; i < letters.length; i++){
    const abecedario = letters[i];
    console.log(abecedario);
    ej1.innerHTML += `<li><ul> ${abecedario}</ul></li>`
}

const ej2 = document.getElementById("ej2");
letters.forEach(i => {ej2.innerHTML += `<li><ul> ${i}</ul></li>`});
