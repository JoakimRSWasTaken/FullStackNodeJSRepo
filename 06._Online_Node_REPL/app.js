import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.json());
import path from 'path';

// ======================= Pages =======================

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontend/frontend.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve('public/about/about.html'));
});

// ======================= API =======================

app.post('/api/repl', (req, res) => {
    // Optional chaining of req.body to return undefined if req.body is that. Avoids crash if we look for replCode in undefined
    let replCode = req.body?.replCode;

    if(!replCode) {
        res.status(400).send({ errorMessage: 'Missing the key replCode in the JSON body' });
    }

    replCode = replCode.replace('console.log("', ''). replace('")');

    res.send({ data: replCode });
});

// Dette gør så vi selv kan definere hvilken port vi kører på. Hvis man kører den samme command, der står i vores start-dev script,
// og vælger en port at sætte som miljøvariabel, kan man køre på den port man vil.
const PORT = process.env.PORT || 8080;

console.log("NODE_ENV: " + process.env.NODE_ENV);

// app.listen(PORT, () => {
//     console.log('Server is listening on port', PORT);
// });

//Vi bruger variablen server og kalder den senere i callback-funktionen. Når vi kalder server.address().port får vi det mest "truthful" svar

const server = app.listen(PORT, () => {
    console.log('Server is listening on port', server.address().port);
});