const users = [{
        userID: 1,
        username: 'jose',
        atributes: ['cool', 'ingenier', 'dev']
    },
    {
        userID: 1,
        username: 'jose',
        atributes: ['cool', 'ingenier', 'dev']
    },
    {
        userID: 1,
        username: 'jose',
        atributes: ['cool', 'ingenier', 'dev']
    },
];

const rta = users.map(user => user.atributes).flat();
console.log('respuesta utilizando map y flat por separado, ', rta);


const rta2 = users.flatMap(user => user.atributes);
console.log(rta2);


const calendars = {
    primaryCalendar: [{
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [{
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

const rta3 = Object.keys(calendars);
const rta4 = Object.values(calendars).flatMap(i => {
    console.log(i);
    return i.map(date => date.startDate);
});


// console.log(rta3);
console.log(rta4);