const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }

  return console.log("server is running on port :", port);
});