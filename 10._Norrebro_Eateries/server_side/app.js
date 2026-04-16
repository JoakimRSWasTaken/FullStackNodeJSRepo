// The fastest way to do this
import 'dotenv/config';

console.log(process.env.SESSION_SECRET);

import express from 'express';

const app = express();

// We use npm run build to run the build script and create the dist folder
// Then we use express.static to mark the dist folder as our static folder
app.use(express.static('../client/dist'));
import path from 'path';

import session from 'express-session';

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

import restaurantsRouter from "./routers/restaurantsRouter.js";
app.use(restaurantsRouter);
import visitorsRouter from "./routers/visitorsRouter.js";
app.use(visitorsRouter);

app.get('/{*splat}', (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log("Server is running on,", PORT);
});