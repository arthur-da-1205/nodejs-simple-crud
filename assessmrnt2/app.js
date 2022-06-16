const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("Home router");
  //   res.send("<h1>Hello home</h1>");
  next();
});

app.use("/users", (req, res) => {
  console.log("I am user");
  res.send("<h2>I am in User Page</h2>");
});

app.listen(3001);
