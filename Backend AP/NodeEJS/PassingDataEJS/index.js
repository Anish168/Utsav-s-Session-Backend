const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log(`app is listening on port ${3000}`);
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

// app.get("/rolldice", (req, res) => {
//   res.render("rolldice.ejs");
// });
app.get("/rolldice", (req, res) => {
  let val = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { num: val });
});
