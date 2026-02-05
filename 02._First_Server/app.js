// Import express as a variable with 'require' to access the express-library easily.
// const express = require('express');

// Instantiante express
// const app = express();

// One-liner version of the two statements above
const app = require('express')();

// Import --> Instantiate --> Listen. 
// We need app.listen to be in the bottom of the file.

// return a JS object instead of a string. Exress converts the object to a JSON and it also sets the correct headers.
app.get('/', (req, res) => {
    res.send({ data: "Halløjsovs bassemand!"})
});

app.get('/snowstorms', (req, res) => {
    res.send({
        data: "WARNING: Snowstorm incoming!"
    })
});

// We can send data in a GET request with:
// path variables --> The correct way for REST APIs
app.get('/cars/:carModel/:year', (req, res) => {
    console.log(req.params);
    res.send({ data: `Your ${req.params.carModel} is very nice, sir! Is it from the year ${req.params.year}?` }); // We get the car model from the request JSON
});

// query string / query parameters
app.get("/bag", (req, res) => {
    // the query string starts with ? and is followed by key-value pairs:
    // bag?item1=durum&item2=burger
    res.send({ data: req.query });

});

app.listen(8080);