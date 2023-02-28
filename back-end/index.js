const express = require("express");
const bodyParser = require("body-parser");
const router = require('./router.js')
const port = 8000;
const app = express();
const cors = require('cors')
const connect = require("./DB");
connect();
app.use(cors())
app.use(bodyParser.json({limit : "10000kb"}));
app.use(router);
app.listen(port, () => {
  `working${port}`;
});

module.exports = app;