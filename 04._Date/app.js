// Import
const express = require('express');

// Instantiate
const app = express();

// console.log(new Date()); // UTC date + time

// console.log(Date()); // Local Time

// console.log(Date.now()) // Unix Epoch (Milliseconds since midnight 1/1 1970)

const months = [
        'January', 'February', 'March',
        'April', 'May', 'June', 
        'July', 'August', 'September', 
        'October', 'November', 'December'
    ];

// Den amerikanske uge starter med Søndag fordi de skal have endnu en årsag til at blive kaldt spassere    
const days = [
    'Sunday','Monday', 'Tuesday',
    'Wednesday', 'Thursday',
    'Friday', 'Saturday'
]

app.get('/months/v1', (req, res) => {
    const currentMonth = new Date().getMonth();

    res.send({ data: months[currentMonth] });
});

app.get('/months/v2', (req, res) => {
    const currentMonth = new Date().toLocaleString('da-DK', { month: 'long' });

    res.send({ data: currentMonth });
});


app.get('/days/v1', (req, res) => {
const weekday = new Date().getDay();

res.send({ data: days[weekday] });
});


app.get('/days/v2', (req, res) => {
const weekday = new Date().toLocaleString('da-DK', { weekday: 'long' });

res.send({ torsdag: weekday });
});

/*
    falsy values:
    false, null, 
    undefined, NaN, 
    Empty strings
*/

// Listen
app.listen(8080, (error) => {
    
    if (error) {
        console.log('Error starting server');
        return;
    }

    console.log('Server is running on port', 8080)
});