import express from "express";
import controller from '../controllers/CategoryController.js';
const { categoryList, categoryById, createCategory, deleteCategory, updateCategoryById } = controller;

const categoryRouter = express.Router();

categoryRouter.get("/", categoryList);
categoryRouter.get("/:id/topics", categoryById);
categoryRouter.post("/create-category", createCategory);
categoryRouter.delete("/delete-category/:id", deleteCategory);
categoryRouter.put("/:id", updateCategoryById);

export default categoryRouter;