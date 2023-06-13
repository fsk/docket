import Topic from '../models/Topics.js'

const topicList = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const allTopicsFromCategory = await Topic.find({ category : categoryId });
        return res.status(200).json(allTopicsFromCategory)
    }catch (err) {
        return res.json({error: `${err}`});
    }
}

const createTopic = async (req, res) => {
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
        return res.json({error: `${err}`});
    }
}

const deleteTopic = async (req, res) => {
    try {
        const topicId = req.params.id;
        const foundTopic = await Topic.findByIdAndDelete({ _id: topicId })
        if (foundTopic === null) {
            return res.status(404).json({message: `Error while delete`})
        }
        return res.status(204).json({message: `Deleted`});

    }catch (error) {
        return res.json({error: `${error}`});
    }
}

export default {
    topicList,
    createTopic,
    deleteTopic
}