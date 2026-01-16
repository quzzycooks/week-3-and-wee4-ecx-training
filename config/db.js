const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // I have removed the < > and put your username/password in
        const dbURI = "mongodb+srv://quddus:Cr7ms1017@cluster0.pdzr5sg.mongodb.net/?appName=Cluster0";
        
        await mongoose.connect(dbURI);
        console.log("Success: Database is connected!");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;