const express = require("express");

//require("dotenv").config();
const dotenv = require("dotenv");
const mongoose=require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();

//DB Connection

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

const port = process.env.PORT || 4000;
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App is listining at ${port}`);
});
