// const express = require('express');
import express from 'express';

const app = express();

app.use(express.static('public'));

// path er et bibliotek
import path from 'path';

// const commonjsCookiesUtil = require('./util/commonjsCookiesUtil.js');
// console.log(commonjsCookiesUtil.getCookie());
import esModuleCookiesUtil from './util/esModuleCookiesUtil.js'
console.log(esModuleCookiesUtil.esModuleCookieFactory());

const agreement = {
    publicVote: "Ja",
    decision: "Yes, we will go through this together."
};

const { publicVote, decision } = agreement;
// console.log(decision);


// Hvis der kommer problemer med at få CSS, så lad være med at læse for meget ind i MIME types
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'));
});

// Når vi nu bruger ES Modules kan vi ikke længere bruge res.sendFile(__dirname + '/public/frontpage/frontpage.html') længere,
// da browseren ikke ser i vores filer. Og ES Modules læner sig opad browseren.

app.get('/cookieFactory', (req, res) => {
    res.sendFile(path.resolve('public/cookieFactory/cookieFactory.html'));
});

// husk at være cd'et ind til det relative sted vi skal være. path.resolve kører relativt fra det sted vi starter den fra.
app.get('/redirection', (req, res) => {
    res.sendFile(path.resolve('public/redirection/redirection.html'));
});

app.listen(8080, () => {
    console.log('Server is running on port', 8080)
});