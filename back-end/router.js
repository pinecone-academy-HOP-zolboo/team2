const express = require("express");
const DeletePost = require("./deletePost.js");
const createPost = require("./createPost.js")

const { getPosts, getPost } = require("./controller");

const entry = express.Router();

entry.get('/', (req, res) => {
    res.json({ module: "welcome to backend" })
})

entry.post("/post/create", createPost)
entry.get("/post", getPosts)
entry.get("/post/:id", getPost)
entry.delete('/post/delete/:id', DeletePost)
// entry.post("/post/:id/comment" , createComment)

module.exports = entry;