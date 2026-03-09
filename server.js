const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("Version 1 running");
});
app.get("/test", (req, res) => {
  res.json("test route is working.");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
