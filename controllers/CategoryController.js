import Category from '../models/Categories.js';
import Topic from "../models/Topics.js";
import createError from "http-errors";
const categoryList = async (req, res, next) => {
    try {
        const allCategories = await Category.find({});
        return res.json(allCategories);
    }catch(error) {
        next(createError(500, error));
    }
}

const categoryById = async (req, res, next) => {
    const categoryId = req.params.id;
    try {
        const categoryById = await Topic
            .find({category: categoryId}, {topicName: 1});
        return res.status(200).json(categoryById);
    }catch (error) {
        //return res.json({error: `${error}`});
        console.log({error: `${error}`})
        next(createError(400, error));
    }
}

const createCategory = async (req, res, next) => {
    try {
        const category = req.body;
        const createCategory = await Category.create(category);
        return res.status(201).json(createCategory);
    }catch (error) {
        console.log({error: `${error}`})
        next(createError(404, error))
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const foundCategory = await Category.findByIdAndDelete({_id: categoryId})
        if (foundCategory !== null) {
            return res.status(204).json({message: `Deleted`});
        }else {
            throw createError(404, 'Category didnt find.');
        }

    }catch (error) {
        console.log({error: `${error}`})
        next(createError(404, error))
    }
}


const updateCategoryById = async (req, res, next) => {
    try {
        const result = await Category.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (result) {
            return res.json(result);
        } else {
            throw createError(404, 'Category didnt find.');
        }
    }catch (err) {
        console.log({error: `${err}`})
        next(createError(404, err))
    }
}

export default {
    categoryList,
    categoryById,
    createCategory,
    deleteCategory,
    updateCategoryById
};