const { request } = require("http");
const PostModel = require("./model");
const DataModel = require("./model");
// const CommentModel = require("./model");

exports.getPosts = async (request, response, next) => {
  try {
    const post = await PostModel.find();
    response.status(200).json({
      data: post,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.getPost = async (request, response, next) => {
  const { id } = request.params;
  try {
    const user = await DataModel.findById(id);
    response.status(200).json({ message: true, data: user });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

// exports.createComment = async (req, res) => {
//   const { id } = req.params;
//   try {
//     await PostModel.findByIdAndUpdate(id, req.body);
//     res.status(200).json(result);
//   } catch (error) {
//     return res.status(400).json({ message: error, data: null });
//   }
// };
