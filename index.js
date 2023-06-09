import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connectToDb} from './cfg/MongoConnect.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Server start on ${process.env.PORT}`);
    connectToDb();
})

