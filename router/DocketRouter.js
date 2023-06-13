import express from "express";
import docketController from "../controllers/DocketController.js";
const { docketList, createDocket, deleteDocket, updateDocket } = docketController;

const docketRouter = express.Router();

docketRouter.get("/:id", docketList);
docketRouter.post("/", createDocket);
docketRouter.delete("/:id", deleteDocket);
docketRouter.put("/:id", updateDocket)

export default docketRouter;