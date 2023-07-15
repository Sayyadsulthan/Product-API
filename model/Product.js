const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },
    qty: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
