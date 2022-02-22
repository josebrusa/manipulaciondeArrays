const words = [ 'srpay', 'limit', 'elite', 'exuberant' ];

const newArray = [];
for (i = 0; i < words.length; i++){
    const list = words[i];
        if(list.length >= 6){
            newArray.push(list);
        }
};

console.log('new array', newArray);
console.log('Original array', words);

// usando filter

const rta = words.filter(i => i.length >= 6);

console.log('rta usando Filter', rta);
console.log('Original Array', words);

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

const rta3 = orders.filter(i => i.delivered && i.total > 100);
console.log('deliverid is: ', rta3);

const search = (query) => {
    return orders.filter(item => {
        return item.customerNames.includes(query);
    });
};

console.log(search('jo'));

