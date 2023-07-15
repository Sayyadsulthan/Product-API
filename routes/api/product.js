const express = require("express");
const app = express();
const products = require("../../controllers/api");

app.post("/create", products.CreateProduct);

app.delete("/:id", products.deleteProduct);
app.put("/:id", products.updateProduct);

module.exports = app;
