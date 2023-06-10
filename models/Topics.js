import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    topicName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

module.exports = mongoose.model('Topic', TopicSchema);