import mongoose from "mongoose"; //import from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://IshikaRaj:9162689579@cluster0.bfzkx.mongodb.net/sweetSpot').then(() => console.log('DB Connected'));
};