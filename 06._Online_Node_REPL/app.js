import express from 'express';

const app = express();

app.use(express.static('./public'));
app.use(express.json());
import path from 'path';

// ======================= Pages =======================

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'));
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

app.listen(8080, () => {
    console.log('Server is listening on port', 8080);
});