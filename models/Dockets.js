import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DocketSchema = new Schema({
    docketTitle: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    docketContent: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 300
    },
    docketImage: {
        type: Schema.Types.ObjectId,
        ref: 'DocketImage'
    },
    topic: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        required: true
    }
});

module.exports = mongoose.model('Docket', DocketSchema);