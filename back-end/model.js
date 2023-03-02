const { model, Schema } = require("mongoose");

const DataScheme = new Schema({
    description: String,
    AccountName: String,
});

const PostScheme = new Schema({
    title: String, 
    image: String
});

const DataModel = model("data", DataScheme);
module.exports = DataModel

const PostModel = model("post", PostScheme);
module.exports = PostModel;