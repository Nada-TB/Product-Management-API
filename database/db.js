const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("connected to the database successfully!");
  } catch (error) {
    console.log("connection to dataBase failed! Error: ", error.message);
  }
};

module.exports = { connectToDatabase };
