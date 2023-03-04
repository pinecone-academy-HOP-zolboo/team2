const PostModel = require('./model')

const DeletePost = async(req, res) =>{
    const { _id } = req.params;
    try {
        const deleted = await PostModel.findOneAndDelete(_id);
        res.status(200).json({
            message: `Post with ${_id} id got deleted`,
            data: deleted
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: err, data: null })
    }
}

module.exports = DeletePost;