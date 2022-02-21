const letters = ['a','b','c','d','e','f'];

for (let i = 0; i < letters.length; i++){
    const abecedario = letters[i];
    console.log('realizado con un for', abecedario);
}

letters.forEach(i => console.log('realizado con el for each', i ));