// The fastest way to do this
import 'dotenv/config';

console.log(process.env.SESSION_SECRET);

import express from 'express';

const app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

import restaurantsRouter from "./routers/restaurantsRouter.js";
app.use(restaurantsRouter);


import visitorsRouter from "./routers/visitorsRouter.js";

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log("Server is running on,", PORT);
});