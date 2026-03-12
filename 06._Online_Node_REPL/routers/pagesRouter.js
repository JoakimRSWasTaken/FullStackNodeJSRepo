import { Router } from 'express';

const router = Router();

import { frontpagePage, aboutPage, contactPage } from "../util/pagesUtil.js";

// Server side rendering, SSR, is very good because of one particular thing. 
// The problem with client side rendering, CSR, is that Google's web scrapers would meet a lot of blank pages because they would only read the HTML (which was not loaded yet)
// SSR is good for SEO.

// SSR is also great because it loads on the server. It offloads the client.
router.get('/', (req, res) => {
    res.send(frontpagePage);
});

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve('public/pages/frontend/frontend.html'));
// });

router.get('/about', (req, res) => {
    res.send(aboutPage);
});

router.get('/contact', (req, res) => {
    res.send(contactPage);
});

export default router;