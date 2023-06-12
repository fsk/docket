import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connectToDb} from './cfg/MongoConnect.js';
import categoryRouter from './router/CategoryRouter.js';
import welcomeRouter from "./router/WelcomeRouter.js";
import topicRouter from "./router/TopicRouter.js";
import docketRouter from "./router/DocketRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use('/welcome', welcomeRouter);
app.use('/category', categoryRouter);
app.use('/topic', topicRouter);
app.use('/docket', docketRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server start on ${process.env.PORT}`);
    connectToDb();
})

