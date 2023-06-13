import Category from '../models/Categories.js';
import Topic from "../models/Topics.js";

const categoryList = async (req, res) => {
    try {
        const allCategories = await Category.find({});
        return res.json(allCategories);
    }catch(error) {
        return res.json({error: `${error}`});
    }
}

const categoryById = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const categoryById = await Topic
            .find({category: categoryId}, {topicName: 1})
        return res.status(200).json(categoryById);
    }catch (error) {
        return res.json({error: `${error}`});
    }
}

const createCategory = async (req, res) => {
    try {
        const category = req.body;
        const createCategory = await Category.create(category);
        return res.status(201).json(createCategory);
    }catch (error) {
        return res.json({error: `${error}`});
    }
}

const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const foundCategory = await Category.findByIdAndDelete({_id: categoryId})
        if (foundCategory === null) {
            return res.status(404).json({message: `Error while delete`})
        }
        return res.status(204).json({message: `Deleted`});

    }catch (error) {
        return res.json({error: `${error}`});
    }
}


const updateCategoryById = async (req, res) => {
    try {
        const result = await Category.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (result) {
            return res.json(result);
        } else {
            return res.status(404).json({
                message: "Category didn't find.",
            });
        }
    }catch (err) {
        return res.json({error: `${err}`});
    }
}

export default {
    categoryList,
    categoryById,
    createCategory,
    deleteCategory,
    updateCategoryById
};