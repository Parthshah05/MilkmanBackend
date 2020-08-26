const express = require("express");

const app = express();

const port = 4000

app.get('/',(req,res) => 
{
  return  res.send("Hello Parth");
});

app.listen(port,() => {
 console.log("Example of app listining");
}
 );