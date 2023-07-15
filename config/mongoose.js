const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URI)
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
