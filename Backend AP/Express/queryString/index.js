const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log(`app is listening on port ${3000}`);
});

app.get("/", (req, res) => {
  res.send("You contacted root path");
});

app.get("/:username", (req, res) => {
  console.log(req.params);
  res.send("You contacted root path");
});

app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  res.send("You contacted root path");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`You contacted ${username}`);
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let html = `<h1>Welcome to the page of ${username}</h1>`;
  res.send(html);
});

app.get("/search", (req, res) => {
  // console.log(req.query);
  // res.send("no result");

  let { q } = req.query;
  let html = `<h1>Search result for ${q}</h1>`;
  res.send(html);
});
