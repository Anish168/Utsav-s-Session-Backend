const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log(`app is listening on port ${3000}`);
});

app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  // console.log(data);
  // res.render("instagramWithEJS.ejs", { data });
  if (data) {
    res.render("instagramWithEJS.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});
