// Man skal bruge export default, ellers fungerer det ikke.
export default function getNewCookieBatch() {
    return ['cookie1', 'cookie2', 'cookie3'];
}

/*
Man kan også, hvis man vil eksportere flere functions, sige

export default {
    getNewCookieBatch
}

*/

// module.exports = getNewCookieBatch;