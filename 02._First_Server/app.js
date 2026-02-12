// With the dependencies set up in package.json, npm install express in bash
// Import express as a variable with 'require' to access the express-library easily.
const express = require('express');

// Instantiante express
const app = express();

// One-liner version of the two statements above
// const app = require('express')();

// Body parsing is included in Express now, contrary to popular belief
app.use(express.json());

// Import --> Instantiate --> Listen. 
// We need app.listen to be in the bottom of the file.

app.get('/', (req, res) => {
    // Avoid absolute paths. Use __dirname to get directory path instead
    // res.sendFile("/Users/sever/Documents/EK/4.Semester/FullstackNode/Code/FullStackNodeJSRepo/02._First_Server/index.html");
    res.sendFile(__dirname + "/index.html");
});

app.get('/xss', (req, res) => {
    res.sendFile(__dirname + '/xss.html');
});

// return a JS object instead of a string. Exress converts the object to a JSON and it also sets the correct headers.
app.get('/snowstorms', (req, res) => {
    res.send({
        data: "WARNING: Snowstorm incoming!"
    });
});

// We can send data in a GET request with:
// path variables --> The correct way for REST APIs
app.get('/cars/:carModel/:year', (req, res) => {
    console.log(req.params);
    res.send({ data: `Your ${req.params.carModel} is very nice, sir! Is it from the year ${req.params.year}?` }); // We get the car model from the request JSON
});

// query string / query parameters
app.get('/bag', (req, res) => {
    // the query string starts with ? and is followed by key-value pairs:
    // bag?item1=durum&item2=burger
    res.send({ data: req.query });

});

app.post('/dinosaurs', (req, res) => {
    console.log(req.body);
    
    res.send(req.body);
});

// create a POST route with the endpoint /energydrinks that adds energy drinks to an array
const energyDrinks = [];

app.post('/energydrinks', (req, res) => {
    const energyDrink = req.body;
    energyDrinks.push(energyDrink);

    console.log({ data: energyDrinks } );
    res.send(req.body);
});

app.listen(8080);   