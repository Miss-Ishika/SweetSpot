import mongoose from "mongoose"; //import from "mongoose"; ---- ES6 module syntax

// const mongoose = require('mongoose'); --- CommonJs

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://IshikaRaj:9162689579@cluster0.bfzkx.mongodb.net/sweetSpot').then(() => console.log('DB Connected'));
};


/* 
To connect database here I use Mango DB atlas ,firstly I created js file in the backend itself namely DB.js where I imported Mongoose a library that connect nodejs to database mongoDB. 
Then I created and asynchronous function so that it can use await to connect to database using mongoose.connect. 
I connected it with a string provided by the database which contain username with password and cluster name and at last use a done function which we return a successful message once it connected to the database.
*/