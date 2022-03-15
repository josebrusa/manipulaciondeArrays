const numbers = [1,24,342,45,29,13,10];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element <= 40){
        rta = false;
    }
}
console.log('Rta con ciclo For',rta);

const rta2 = numbers.every(item => item <= 600);

console.log('Rta con el metodo Every', rta2);