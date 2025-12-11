const express = require("express");
const app = express();
const cors = require('cors');
const dbConnect = require("./connect");
const product = require("./routes/product")


dbConnect();
app.use(cors())

app.use(express.json())
app.use(product);

module.exports = app;






