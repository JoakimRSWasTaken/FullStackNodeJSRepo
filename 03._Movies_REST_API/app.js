const express = require('express');
const app = express();

app.use(express.json());

const movies = [
    {id: 1, title: "Blinkende Lygter", releaseYear: 2000},
    {id: 2, title: "Clash of the Titans", releaseYear: 2010},
    {id: 3, title: "Druk", releaseYear: 2020}
];

let currentIdForPostRequest = movies.length + 1;
console.log(currentIdForPostRequest);

app.get('/movies', (req, res) => {
    res.send({ data: movies });
});

app.get('/movies/:id', (req, res) => {
    const providedMovieId = Number(req.params.id);
    const foundMovie = movies.find((movie) => movie.id === providedMovieId);

    if (!foundMovie) {
        res.status(404).send({ errorMessage: `No movie found by id: ${req.params.id}` });
    } else {
        res.send(foundMovie);
    }
});

/*
    Status codes:
2xx: Success
3xx: Redirection
4xx: Client Error
5xx: Server Error
*/

app.post('/movies', (req, res) => {
    const movieToAdd = {
        id: currentIdForPostRequest,
        title: req.body.title,
        releaseYear: req.body.releaseYear
    };
    movies.push(movieToAdd);

    currentIdForPostRequest++;
    res.send(movieToAdd);
});

app.listen(8080);