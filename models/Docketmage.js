import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DocketImageSchema = new Schema({
    imageName: {
        type: String,
        required: true
    },
    imageData: {
        type: String,
        required: true
    },
    docket: {
        type: Schema.Types.ObjectId,
        ref: 'Docket',
        required: true
    }
});

module.exports = mongoose.model('DocketImage', DocketImageSchema);