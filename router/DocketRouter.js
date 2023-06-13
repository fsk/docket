import express from "express";
import docketController from "../controllers/DocketController.js";
const { docketList, createDocket, deleteDocket } = docketController;

const docketRouter = express.Router();

docketRouter.get("/:id", docketList);
docketRouter.post("/", createDocket);
docketRouter.delete("/:id", deleteDocket);

export default docketRouter;