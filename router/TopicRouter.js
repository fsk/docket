import express from "express";
import controller from '../controllers/TopicController.js'

const { topicList, createTopic, deleteTopic, updateTopicById } = controller

const topicRouter = express.Router();

topicRouter.get("/:id", topicList);
topicRouter.post("/create-topic/", createTopic);
topicRouter.delete("/delete-topic/:id", deleteTopic);
topicRouter.put("/:id", updateTopicById);

export default topicRouter