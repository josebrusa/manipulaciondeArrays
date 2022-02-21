const letters = ['a','b','d','c','e'];
const newLetters = [];

for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    newLetters.push(element + '++')
}

console.log('Original ', letters);
console.log('Letters con un for', newLetters);

// example Map

const newLettersMap = letters.map(i => i + '++');
console.log('letters con Map', newLettersMap);

const app = document.getElementById('root');
    const list = newLettersMap.map(newLettersMap => {
        return `<li>${newLettersMap}</li>`
    });
    app.innerHTML = list.join('');

