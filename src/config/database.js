const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://prathamsharma7648_db_user:Ak1DD4tifeywueIu@cluster0.4at5jsp.mongodb.net/devTinder?retryWrites=true&w=majority",
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports = connectToDatabase;
