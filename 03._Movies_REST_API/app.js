const express = require('express');
const app = express();

app.use(express.json());

const movies = [
    {id: 1, title: "Blinkende Lygter", releaseYear: 2000},
    {id: 2, title: "Clash of the Titans", releaseYear: 2010},
    {id: 3, title: "Druk", releaseYear: 2020}
];

let currentIdForPostRequest = movies.length + 1;
//console.log(currentIdForPostRequest);

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

app.put('/movies/:id', (req, res) => {
    let movieId = parseInt(req.params.id);
    let moviesArrayIndexToPatch = movies.findIndex(movie => movie.id === movieId);

    // findIndex returnerer -1 hvis den ikke finder noget der passer kriteriet
    if (moviesArrayIndexToPatch === -1) {
        return res.status(404).json({ message: "Movie not found." });
    };

    let updatedMovie = {
        id: movieId,
        title: req.body.title,
        releaseYear: req.body.releaseYear
    };
    
    movies[moviesArrayIndexToPatch] = updatedMovie;

    res.send(updatedMovie);
});

app.patch('/movies/:id', (req, res) => {
    let movieId = parseInt(req.params.id);
    let moviesArrayIndexToPatch = movieId - 1;
    
    if (moviesArrayIndexToPatch === -1) {
        return res.status(404).json({ message: "Movie not found." });
    };

    let updates = req.body;

    // Spread notation til at 
    let updatedMovie = {
        ...movies[moviesArrayIndexToPatch],
        ...updates
    };

    res.send(updatedMovie);
});

app.delete('/movies/:id', (req, res) => {
    let movieId = parseInt(req.params.id);
    let moviesArrayIndexToDelete = movieId - 1;
    
    if (moviesArrayIndexToDelete === -1) {
        return res.status(404).json({ message: "Movie not found." });
    };

    movies.splice(moviesArrayIndexToDelete, 1);
    currentIdForPostRequest--;

    res.send({ data: `Movie with id ${movieId} has been deleted.` });
});

app.listen(8080);