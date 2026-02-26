const cookie = require('./cookie.json');

function getCookie() {
    return cookie;
}

console.log(cookie);

const name = 'Gustav';
const person = {
    name
}; // Man kan bare skrive name i stedet for name: name. Det er shorthand notation.

/* Dette er også shorthand notation. I stedet kunne der stå
module.exports = {
    getCookie
};

Vi kan heller ikke bruge export function getCookie og vi kan ikke få lov til at sige import cookie.json

*/
module.exports = getCookie;