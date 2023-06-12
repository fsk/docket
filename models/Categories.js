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

const Category = mongoose.model('Category', CategorySchema);

export default Category;