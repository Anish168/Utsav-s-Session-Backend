const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: "1a",
    username: "Anish",
    content: "I love coding",
  },
  {
    id: "2b",
    username: "Utsav",
    content: "Hard work pays off",
  },
  {
    id: "3c",
    username: "Cutie",
    content: "World is cruel",
  },
];

app.get("/", (req, res) => {
  res.send("serving working well");
});

app.get("posts/new", (req, res) => {
  res.render("new.ejs");
});
app.get("/posts", (req, res) => {
  //   res.send("posts working well");
  res.render("index.ejs", { posts });
});

app.post("/posts", (req, res) => {
  //   console.log(req.body);
  let { username, content } = req.body;
  posts.push({ username, content });
  //   res.send("post request working");
  res.redirect("/posts");
});

app.get("posts/:id", (req, res) => {
  let { id } = req.params;
  //   console.log(id);
  let post = posts.find((p) => id === p.id);
  console.log(post);
  //   res.send("request working");
  res.render("show.ejs", { post });
});

app.listen(port, () => {
  console.log("Listening to port : 3000");
});
