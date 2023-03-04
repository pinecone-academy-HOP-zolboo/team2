const express = require("express");
const createPost = require("./createPost");
const { getPosts, getPost, createPost , updatePost } = require("./controller");

const entry = express.Router();

entry.get('/', (req, res) => {
    res.json({ module: "welcome to backend" })
})

entry.post('/post/create', createPost)
entry.get("/post", getPosts)
entry.get("/post/:id", getPost)
entry.post("/post/:id/comment" , updatePost)

module.exports = entry;