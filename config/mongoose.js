const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Product_API")
  .then(() => {
    console.log("mongoose connection is successfull...");
  })
  .catch((err) => {
    console.error.bind(console, err);
  });

const db = mongoose.connection;
db.on("error", (err) => {
  if (err) {
    return console.log(err);
  }
});

db.once("open", () => console.log("connected to db..."));

module.exports = db;
