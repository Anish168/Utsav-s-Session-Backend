// const mysql = require("mysql2");
// // const { faker } = require("@faker-js/faker");
// const express = require("express");
// const app = express();
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "app",
//   password: "admin",
// });

// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password(),
//     faker.date.birthdate(),
//   ];
// };

// app.get("/", (req, res) => {
//   let q = `SELECT count(*) from user`;
//   try {
//     connection.query(q, (err, result) => {
//       if (err) throw err;
//       //   console.log(result);
//       console.log(result[0]["count(*)"]);
//       //   res.send(result);
//       res.send(result[0]);
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   //   res.send("Welcome to home page");
// });

// app.listen("8080", () => {
//   console.log("Running");
// });

/***********************ADD Template**************/
// const mysql = require("mysql2");
// const express = require("express");
// const app = express();
// const path = require("path");

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "../views"));

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "app",
//   password: "admin",
// });

// // Home route
// app.get("/", (req, res) => {
//   let q = `SELECT count(*) from user`;
//   try {
//     connection.query(q, (err, result) => {
//       if (err) throw err;
//       let count = result[0]["count(*)"];
//       res.render("home.ejs", { count });
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   //   res.send("Welcome to home page");
// });

// app.listen("8080", () => {
//   console.log("Running");
// });

/*************************Show Route (ALL USERS ON WEBPAGE)*********/
// const mysql = require("mysql2");
// const express = require("express");
// const app = express();
// const path = require("path");

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "../views"));

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "app",
//   password: "admin",
// });

// // Home route
// app.get("/", (req, res) => {
//   let q = `SELECT count(*) from user`;
//   try {
//     connection.query(q, (err, result) => {
//       if (err) throw err;
//       let count = result[0]["count(*)"];
//       res.render("home.ejs", { count });
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   //   res.send("Welcome to home page");
// });

// Show route
// app.get("/user", (req, res) => {
//   let q = `SELECT * FROM user`;
//   try {
//     connection.query(q, (err, users) => {
//       if (err) throw err;
//       res.render("users.ejs", { users });
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.listen("8080", () => {
//   console.log("Running");
// });

/****************Edit Route*****************/
// const mysql = require("mysql2");
// const express = require("express");
// const app = express();
// const path = require("path");
// const methodOverride = require("method-override");

// app.use(methodOverride("_method"));
// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "../views"));

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "app",
//   password: "admin",
// });

// // Home route
// app.get("/", (req, res) => {
//   let q = `SELECT count(*) from user`;
//   try {
//     connection.query(q, (err, result) => {
//       if (err) throw err;
//       let count = result[0]["count(*)"];
//       res.render("home.ejs", { count });
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   //   res.send("Welcome to home page");
// });

// // Show route
// app.get("/user", (req, res) => {
//   let q = `SELECT * FROM user`;
//   try {
//     connection.query(q, (err, users) => {
//       if (err) throw err;
//       res.render("users.ejs", { users });
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// // Edit Route
// app.get("/user/:id/edit", (req, res) => {
//   let { id } = req.params;
//   let q = `SELECT * FROM user WHERE id = '${id}'`;
//   try {
//     connection.query(q, (err, result) => {
//       if (err) throw err;
//       // console.log(result);
//       let user = result[0];
//       res.render("edit.ejs", { user });
//     });
//   } catch (err) {
//     console.log(err);
//     res.send("some error in DB");
//   }
// });

// // update route in DB
// app.patch("/user/:id", (req, res) => {
//   res.send("updated");
// });

// app.listen("8080", () => {
//   console.log("Running");
// });

/****************Update Route*****************/
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "app",
  password: "admin",
});

// Home route
app.get("/", (req, res) => {
  let q = `SELECT count(*) from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
  }
  //   res.send("Welcome to home page");
});

// Show route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("users.ejs", { users });
    });
  } catch (err) {
    console.log(err);
  }
});

// Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result);
      let user = result[0];
      if (formPass != user.password) {
        res.send("WRONG PASSWORD");
      } else {
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          // res.send(result);
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

// update route in DB
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result);
      let user = result[0];
      res.send(user);
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

app.listen("8080", () => {
  console.log("Running");
});
