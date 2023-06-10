import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DocketNoteSchema = new Schema({
    docketNoteTitle: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 20
    },
    docketNoteDescription: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 50
    },
    docket: {
        type: Schema.Types.ObjectId,
        ref: 'Docket',
        required: true
    } 
});

module.exports = mongoose.model('DocketNote', DocketNoteSchema);