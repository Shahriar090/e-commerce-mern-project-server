const mongoose = require("mongoose");
const { mongoDbUrl } = require("../secret");
const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(mongoDbUrl, options);
    console.log("MongoDB connected successfully");
    mongoose.connection.on("error", (error) => {
      console.error("DB connection filed:", error);
    });
  } catch (error) {
    console.error("Could not connect to DB:", error.toString());
  }
};
module.exports = connectDB;
