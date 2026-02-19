const express = require('express');
const app = express();

app.use(express.json());

const movies = [
    {id: 1, title: "Blinkende Lygter", releaseYear: 2000},
    {id: 2, title: "Clash of the Titans", releaseYear: 2010},
    {id: 3, title: "Druk", releaseYear: 2020}
];

let nextIdForPostRequest = 4;
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
        res.send({ data: foundMovie });
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
    
    if (!req.body) {
        return res.status(400).send({ errorMessage: 'No JSON body provided.'});
    }
    
    const providedMovie = req.body;
    providedMovie.id = nextIdForPostRequest++;

    //nextIdForPostRequest++ er postfix notation, så den incrementer efter den applier.
    //++nextIdForPostRequest er prefix notation, så den ville incremente før den applier.

    movies.push(providedMovie);

    res.send({ data: providedMovie });
});

app.put('/movies/:id', (req, res) => {
    const providedMovieId = parseInt(req.params.id);
    const foundMovieId = movies.findIndex(movie => movie.id === providedMovieId);

    // findIndex returnerer -1 hvis den ikke finder noget der passer kriteriet
    if (foundMovieId === -1) {
        return res.status(404).json({ message: "Movie not found." });
    };

    let updatedMovie = {
        id: providedMovieId,
        title: req.body.title,
        releaseYear: req.body.releaseYear
    };
    
    movies[foundMovieId] = updatedMovie;

    res.send({ data: updatedMovie });
});

app.patch('/movies/:id', (req, res) => {
    const providedMovieId = Number(req.params.id);
    const foundMovieIndex = movies.findIndex(movie => movie.id === providedMovieId);
    
    if (foundMovieIndex === -1) {
        return res.status(404).json({ message: "Movie not found." });
    };

    const foundMovie = movies[foundMovieIndex];
    const providedMovie = req.body;

    // Spread notation til at samle de to objekter. Id til sidst for at undgå malicious overskrivelse af id'et.
    const updatedMovie = {
        ...foundMovie,
        ...providedMovie, 
        id: providedMovieId
    };

    res.send({ data: updatedMovie });
});

app.delete('/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
    const moviesArrayIndexToDelete = movieId - 1;
    
    if (moviesArrayIndexToDelete === -1) {
        return res.status(404).json({ message: "Movie not found." });
    };

    movies.splice(moviesArrayIndexToDelete, 1);

    // res.send({ data: `Movie with id ${movieId} has been deleted.` });
    res.status(204).send();
});

app.listen(8080);