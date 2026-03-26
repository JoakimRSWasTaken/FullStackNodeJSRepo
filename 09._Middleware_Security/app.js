import express from 'express';

const app = express();

// Helmet sets a lot of headers that create a lot of security for the app. npm i helmet
import helmet from 'helmet';
app.use(helmet()); // helmet() exists for us to be able to pass an options object as an argument. Helmet has req, res, next.
// google npm helmet for more information

// Keep the middleware in the top of the page
import { rateLimit } from 'express-rate-limit';

const generalLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 50, // Limit each IP to 50 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
});

app.use(generalLimiter);

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 5,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56,
});

app.use('/auth', authLimiter);

import middlewareRouter from "./routers/middlewareRouter.js";
app.use(middlewareRouter);

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

// fallback route /{*splat} is the new syntax in Express 5.x, before it was just /*
app.get('/{*splat}', (req, res) => {
    res.send(`  <div>
                    <h1>404</h1>
                    <h3>Page - ${req.path} - does not exist.</h3>
                </div>`);
});

// app.all is for all HTTP methods. Since this app.all is after the fallback for app.get, this should respond with JSON
app.all('/{*splat}', (req, res) => {
    res.send({ errorMessage: `The route for ${req.path} and the HTTP method ${req.method} does not exist` });
});

// Nullish coalescing operator ?? only checks for null and undefined
const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log("Server is running on,", PORT);
});