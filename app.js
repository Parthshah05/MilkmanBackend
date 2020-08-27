const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello Parth");
});

app.listen(port, () => {
  console.log(`App is listining at ${port}`);
});
