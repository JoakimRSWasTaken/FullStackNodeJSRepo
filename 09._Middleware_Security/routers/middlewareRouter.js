import { Router } from 'express'

const router = Router();

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

// app.use sets up middleware so this is instead of passing it as argument in every route.

router.use(ipLogger);

// If you would want it for a specific route, you can do it like this
router.use('/room', ipLogger);

// Middleware functions are usually named is(...something), e.g. isAuthenticated(req, res, next) {}.
// This is only about Express middleware. Avoid confusion since middleware is many things in different contexts.

function butler(req, res, next) {
    console.log('Welcome to the mansion...');
    next();
}

function takeCoat(req, res, next) {
    req.coatOff = true;
    next();
}

// Here we will see 'Welcome to Room 1' in the browser due to the file being parsed from top to bottom
// Express is a middleware manager
// We can also chain callback functions here, inserting butler
router.get('/room', butler, takeCoat, (req, res, next) => { // the next argument is a function that gets the next route that matches the endpoint
    // res.send({ data: 'Welcome to Room 1' });
    console.log('You are in Room 1.', req.coatOff);
    next();
});

router.get('/room', (req, res) => {
    console.log('This is the middleware');
    next();
}, (req, res) => {
    res.send({ data: 'Welcome to Room 2' });
});

// ==========================================================================================================================

// File is being parsed from the top, so when room/sofa is accessed, we get Room 1 here
// router.get('/room/:furniture', (req, res) => {
//     res.send({ data: 'Welcome to Room 1' });
// });

// router.get('/room/sofa', (req, res) => {
//     res.send({ data: 'Welcome to Room 2' });
// });

export default router;