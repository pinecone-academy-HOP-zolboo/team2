const { model, Schema } = require("mongoose");

const PostScheme = new Schema({
    description: String,
    AccountName: String,
    // registerDate: {type :Date, default: Date.now},
});
const PostModel = model("data", PostScheme);
module.exports = PostModel;