const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "Anish",
    content: "I love coding",
  },
  {
    id: uuidv4(),
    username: "Utsav",
    content: "Hard work pays off",
  },
  {
    id: uuidv4(),
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
  let id = uuidv4();
  posts.push({ id, username, content });
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

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.send("patch request working");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.send("Delete successful");
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("Listening to port : 3000");
});
