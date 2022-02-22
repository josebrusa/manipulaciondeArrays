const totals = [1,2,3,4,5];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}

console.log(sum);

// usando la funcion reduce

const rta2 = totals.reduce((sum, element) => sum + element, 0);
console.log(rta2);