import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

// ======================= Pages =======================

import pagesRouter from "./routers/pagesRouter.js"

app.use(pagesRouter);

// ======================= API =======================

import replRouter from "./routers/replRouter.js";

app.use(replRouter);

import contactRouter from "./routers/contactRouter.js"

app.use(contactRouter);

// We have moved the routes from API to replRouter.js

// Dette gør så vi selv kan definere hvilken port vi kører på. Hvis man kører den samme command, der står i vores start-dev script,
// og vælger en port at sætte som miljøvariabel, kan man køre på den port man vil.
const PORT = process.env.PORT || 8080;

// console.log("NODE_ENV: " + process.env.NODE_ENV);

// app.listen(PORT, () => {
//     console.log('Server is listening on port', PORT);
// });

//Vi bruger variablen server og kalder den senere i callback-funktionen. Når vi kalder server.address().port får vi det mest "truthful" svar

const server = app.listen(PORT, () => {
    console.log('Server is listening on port', server.address().port);
});