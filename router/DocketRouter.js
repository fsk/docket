import express from "express";
import docketController from "../controllers/DocketController.js";
const { docketList, createDocket } = docketController;

const docketRouter = express.Router();

docketRouter.get("/:id", docketList);
docketRouter.post("/", createDocket)

export default docketRouter;