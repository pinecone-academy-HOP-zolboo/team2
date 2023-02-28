const PostModel = require('./model.js')

const createPost = async (req, res, next) => {
    
    if (
        !req.body?.title,
        !req.body?.image
    ) {
        res
            .status(401)
            .json({ message: "make dull post you idiot" })
    } else {

        const createPost = await PostModel.create({ ...req.body})
        res
            .status(201)
            .json({ message: 'new post has created', data: createPost })
    }
}

module.exports = createPost;