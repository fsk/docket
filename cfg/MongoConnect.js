import mongoose from 'mongoose';

export function connectToDb() {
    return mongoose
        .connect(process.env.MONGO_URI)
        .then(_ => {
            console.log(`Connect to Db`);
            mongoose.set('debug', true);
        })
        .catch(err => console.log(`Error : ${err}`));
}


