import Docket from '../models/Dockets.js';
import Topic from "../models/Topics.js";

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

const deleteDocket = async (req, res) => {
    try {
        const docketId = req.params.id;
        const foundDocket = await Docket.findByIdAndDelete({ _id: docketId })
        if (foundDocket === null) {
            return res.status(404).json({message: `Error while delete`})
        }
        return res.status(204).json({message: `Deleted`});
    }catch (err) {
        return res.json({error: `${err}`});
    }
}

const updateDocket = async (req, res) => {
    try {
        const result = await Docket.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (result) {
            return res.json(result);
        } else {
            return res.status(404).json({
                message: "Docket didn't find.",
            });
        }
    }catch (err) {
        return res.json({error: `${err}`});
    }
}


export default {
    docketList,
    createDocket,
    deleteDocket,
    updateDocket
}