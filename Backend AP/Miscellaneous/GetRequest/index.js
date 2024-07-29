// const express = require("express");
// const app = express();

// app.listen(3000, (req, res) => {
//   console.log("server is running on port 3000");
// });

// app.get("/register", (req, res) => {
//   let { name, password } = req.query;
//   res.send("register page sent via GET");
// });
// app.post("/register", (req, res) => {
//   console.log(req.body);
//   res.send("register page sent via POST");
// });

// Handling Post Request

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); //url encode data
app.use(express.json()); //json format data

app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});

app.get("/register", (req, res) => {
  let { name, password } = req.query;
  res.send(`register page sent via GET. Welcome ${name}`);
});
app.post("/register", (req, res) => {
  let { name, password } = req.body;
  // console.log(req.body);
  res.send(`register page sent via POST. Welcome ${name}`);
});
