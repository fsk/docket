import Docket from '../models/Dockets.js';

const docketList = async (req, res) => {
    try {
        const topicId = req.params.id;
        const allDocketsFromTopic = await Docket.find( { topic: topicId });
        return res.status(200).json(allDocketsFromTopic);
    }catch (err) {
        return res.json({error: `${err}`});
    }
}

const createDocket = async (req, res) => {
    try {
        const newDocket = req.body;
        const createdDocket = await Docket.create(newDocket);
        return res.status(201).json(createdDocket);
    }catch (err) {
        return res.json({error: `${err}`});
    }
}

export default {
    docketList,
    createDocket
}