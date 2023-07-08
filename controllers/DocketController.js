import Docket from '../models/Dockets.js';
import Topic from "../models/Topics.js";
import createError from "http-errors";

const docketList = async (req, res, next) => {
    try {
        const topicId = req.params.id;
        const allDocketsFromTopic = await Docket.find( { topic: topicId });
        return res.status(200).json(allDocketsFromTopic);
    }catch (err) {
        next(createError(500, err));
    }
}

const createDocket = async (req, res, next) => {
    try {
        const newDocket = req.body;
        const createdDocket = await Docket.create(newDocket);
        return res.status(201).json(createdDocket);
    }catch (err) {
        next(createError(500, err));
    }
}

const deleteDocket = async (req, res, next) => {
    try {
        const docketId = req.params.id;
        const foundDocket = await Docket.findByIdAndDelete({ _id: docketId })
        if (foundDocket === null) {
            throw createError(400, 'Error when delete docket');
        }
        return res.status(204).json({message: `Deleted`});
    }catch (err) {
        next(createError(500, err));
    }
}

const updateDocket = async (req, res, next) => {
    try {
        const result = await Docket.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (result) {
            return res.json(result);
        } else {
            throw createError(400, 'Docket didnt find');
        }
    }catch (err) {
        next(createError(500, err));
    }
}


export default {
    docketList,
    createDocket,
    deleteDocket,
    updateDocket
}