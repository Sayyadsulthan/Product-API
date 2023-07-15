const express = require("express");
const app = express();
const products = require("../../controllers/api");

app.get("/products/", products.getProduct);
app.use("/product", require("./product"));

module.exports = app;
