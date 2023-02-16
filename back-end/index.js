const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const port = 8000;
const app = express();
const cors = require('cors')
const connect = require("./DB");
connect();
const { getPosts, getPost } = require("./controller");
app.use(cors())
app.use(bodyParser.json());


router
  .get("/post", getPosts)
  .get("/post/:id", getPost)

app.use(router);
app.listen(port, () => {
  `working${port}`;
});

module.exports = app;