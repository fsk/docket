import Topic from '../models/Topics.js'
import createError from "http-errors";

const topicList = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const allTopicsFromCategory = await Topic.find({ category : categoryId });
        return res.status(200).json(allTopicsFromCategory)
    }catch (err) {
        return res.json({error: `${err}`});
    }
}

const createTopic = async (req, res, next) => {
    try {
        const category = req.body.category.categoryId;
        const topicName = req.body.topicName;
        const topic = new Topic({
            topicName,
            category
        })
        const createTopic = await Topic.create(topic);
        return res.status(201).json(createTopic);
    }catch (err) {
        next(createError(404, err))
    }
}

const deleteTopic = async (req, res, next) => {
    try {
        const topicId = req.params.id;
        const foundTopic = await Topic.findByIdAndDelete({ _id: topicId })
        if (foundTopic === null) {
            throw createError(400, 'Error while delete topic');
        }
        return res.status(204).json({message: `Deleted`});

    }catch (error) {
        next(createError(404, error))
    }
}


const updateTopicById = async (req, res, next) => {
    try {
        const result = await Topic.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (result) {
            return res.json(result);
        } else {
            throw createError(400, 'Topic didnt find');
        }
    }catch (err) {
        next(createError(404, err))
    }
}

export default {
    topicList,
    createTopic,
    deleteTopic,
    updateTopicById
}