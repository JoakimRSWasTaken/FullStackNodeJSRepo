const express = require('express');

const app = express();


// Hvis der kommer problemer med at få CSS, så lad være med at læse for meget ind i MIME types
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage.html');
});

app.listen(8080, () => {
    console.log('Server is running on port', 8080)
});