const mongoose = require("mongoose");

const uri =
  "mongodb+srv://team3:team3@cluster0.msus022.mongodb.net/team3";
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
mongoose.set('strictQuery', true);
module.exports = connect;