import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import * as bodyparser from 'body-parser';
import cors from 'cors';

import router from './routes';

dotenv.config();

const DB_URL = process.env.DB_URL ?? '';
const PORT = process.env.APP_PORT ?? 6000;

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use(router);

console.log("Connecting to Mongodb")
mongoose.connect(DB_URL);

const db = mongoose.connection;
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
    });
});