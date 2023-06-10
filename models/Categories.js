import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    }
});

module.exports = mongoose.model('Category', CategorySchema);