const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log(`app is listening on port ${3000}`);
});

app.get("/", (req, res) => {
  res.send("You contacted root path");
});

app.get("/apple", (req, res) => {
  res.send("You contacted apple path");
});

app.get("/orange", (req, res) => {
  res.send("You contacted orange path");
});

// wildcard route
app.get("*", (req, res) => {
  res.send("Nothing here");
});
