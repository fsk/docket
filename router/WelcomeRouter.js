import express from "express";

import controller from '../controllers/WelcomeController.js'

const { welcome } = controller;



const welcomeRouter = express.Router();

welcomeRouter.get('/', welcome);

export default welcomeRouter;