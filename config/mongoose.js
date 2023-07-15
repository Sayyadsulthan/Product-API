const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://asulthan088:Asulthan088@cluster0.nou7gae.mongodb.net/Product-API?retryWrites=true&w=majority")
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
