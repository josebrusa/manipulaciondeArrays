const nums = [1,3,2,3,1,3,2,3,1,3,2,3];

const rta = nums.reduce((obj, nums) => {
    if(!obj[nums]){
        obj[nums] = 1;
    } else {
        obj[nums] = obj[nums] + 1;
    }
    return obj;
}, {});

// console.log(rta);

const data = [
    {
        name: 'jose',
        level: 'low',
    },
    {
        name: 'gaby',
        level: 'middle',
    },
    {
        name: 'emi',
        level: 'low',
    },
    {
        name: 'eva',
        level: 'higth',
    },
    {
        name: 'miqueas',
        level: 'higth',
    },
    {
        name: 'caleb',
        level: 'higth',
    },
    {
        name: 'cata',
        level: 'middle',
    },
    {
        name: 'luz',
        level: 'low',
    },
];

const rta1 = data
    .map(item => item.level)
    .reduce((obj, item) => {
        if(!obj[item]){
            obj[item] = 1;
        }else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    }, {});
console.log(rta1);