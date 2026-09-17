require("dotenv").config({ quiet: true });

const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI && process.env.MONGO_URI.trim();

  if (!mongoUri) {
    throw new Error("MONGO_URI is missing. Create a .env file from .env.example.");
  }

  console.log("Connecting to MongoDB...");

  await mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 10000
  });

  console.log("MongoDB connected");
};

module.exports = connectDB;
