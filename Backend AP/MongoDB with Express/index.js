/********Basic Setup*********/

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// main()
//   .then(() => {
//     console.log("conection successful");
//   })
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
// }

// app.get("/", (req, res) => {
//   res.send("root is working");
// });

// app.listen(8080, () => {
//   console.log("server is running");
// });

/********Creating the Model*********/

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const Chat = require("../Models/chat.js");
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// main()
//   .then(() => {
//     console.log("conection successful");
//   })
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
// }

// let chat1 = new Chat({
//   from: "Utsav",
//   to: "Anish",
//   msg: "Mera Bhai",
//   created_at: new Date(),
// });

// chat1.save().then((res) => {
//   console.log(res);
// });

// app.get("/", (req, res) => {
//   res.send("root is working");
// });

// app.listen(8080, () => {
//   console.log("server is running");
// });

/********Index Route *********/
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const Chat = require("./Models/chat.js");

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));

// main()
//   .then(() => {
//     console.log("Connection successful");
//   })
//   .catch((err) => console.log("Error connecting to MongoDB:", err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
// }

// // Creating and saving a chat
// let chat1 = new Chat({
//   from: "Utsav",
//   to: "Anish",
//   msg: "Mera Bhai",
//   created_at: new Date(),
// });

// chat1
//   .save()
//   .then((res) => {
//     console.log("Chat saved:", res);
//   })
//   .catch((err) => {
//     console.log("Error saving chat:", err);
//   });
// // Home Route
// app.get("/", (req, res) => {
//   res.send("Root is working");
// });

// // Index route
// // Chats route
// app.get("/chats", async (req, res) => {
//   let chats = await Chat.find();
//   console.log(chats);
//   // res.send("Working");
//   res.render("index.ejs", { chats });
// });

// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });

/********New & Create Route *********/
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const Chat = require("./Models/chat.js");

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));

// main()
//   .then(() => {
//     console.log("Connection successful");
//   })
//   .catch((err) => console.log("Error connecting to MongoDB:", err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
// }

// // Creating and saving a chat
// let chat1 = new Chat({
//   from: "Utsav",
//   to: "Anish",
//   msg: "Mera Bhai",
//   created_at: new Date(),
// });

// chat1
//   .save()
//   .then((res) => {
//     console.log("Chat saved:", res);
//   })
//   .catch((err) => {
//     console.log("Error saving chat:", err);
//   });
// // Home Route
// app.get("/", (req, res) => {
//   res.send("Root is working");
// });

// // Index route
// // Chats route
// app.get("/chats", async (req, res) => {
//   let chats = await Chat.find();
//   console.log(chats);
//   // res.send("Working");
//   res.render("index.ejs", { chats });
// });

// // New Route
// app.get("/chats/new", (req, res) => {
//   res.render("new.ejs");
// });

// // Create Route
// app.post("/chats", (req, res) => {
//   let { from, to, msg } = req.body;
//   let newChat = new Chat({
//     from: from,
//     to: to,
//     msg: msg,
//     created_at: new Date(),
//   });
//   console.log(newChat);
//   newChat
//     .save()
//     .then((res) => {
//       console.log("chats saved");
//     })
//     .catch((err) => {
//       console.log("err while saving");
//     });
//   res.redirect("/chats");
// });

// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });

/***********Using Date***********/
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const Chat = require("./Models/chat.js");

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));

// main()
//   .then(() => {
//     console.log("Connection successful");
//   })
//   .catch((err) => console.log("Error connecting to MongoDB:", err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
// }

// // Creating and saving a chat
// let chat1 = new Chat({
//   from: "Utsav",
//   to: "Anish",
//   msg: "Mera Bhai",
//   created_at: new Date(),
// });

// chat1
//   .save()
//   .then((res) => {
//     console.log("Chat saved:", res);
//   })
//   .catch((err) => {
//     console.log("Error saving chat:", err);
//   });
// // Home Route
// app.get("/", (req, res) => {
//   res.send("Root is working");
// });

// // Index route
// // Chats route
// app.get("/chats", async (req, res) => {
//   let chats = await Chat.find();
//   console.log(chats);
//   // res.send("Working");
//   res.render("index.ejs", { chats });
// });

// // New Route
// app.get("/chats/new", (req, res) => {
//   res.render("new.ejs");
// });

// // Create Route
// app.post("/chats", (req, res) => {
//   let { from, to, msg } = req.body;
//   let newChat = new Chat({
//     from: from,
//     to: to,
//     msg: msg,
//     created_at: new Date(),
//   });
//   console.log(newChat);
//   newChat
//     .save()
//     .then((res) => {
//       console.log("chats saved");
//     })
//     .catch((err) => {
//       console.log("err while saving");
//     });
//   res.redirect("/chats");
// });

// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });

/****************Edit & Update Route********************* */
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require("path");
// const Chat = require("./Models/chat.js");
// const methodOverride = require("method-override");

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method "));

// main()
//   .then(() => {
//     console.log("Connection successful");
//   })
//   .catch((err) => console.log("Error connecting to MongoDB:", err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
// }

// // Home Route
// app.get("/", (req, res) => {
//   res.send("Root is working");
// });

// // Index route
// // Chats route
// app.get("/chats", async (req, res) => {
//   let chats = await Chat.find();
//   // console.log(chats);
//   // res.send("Working");
//   res.render("index.ejs", { chats });
// });

// // New Route
// app.get("/chats/new", (req, res) => {
//   res.render("new.ejs");
// });

// // Create Route
// app.post("/chats", (req, res) => {
//   let { from, to, msg } = req.body;
//   let newChat = new Chat({
//     from: from,
//     to: to,
//     msg: msg,
//     created_at: new Date(),
//   });
//   console.log(newChat);
//   newChat
//     .save()
//     .then((res) => {
//       console.log("chats saved");
//     })
//     .catch((err) => {
//       console.log("err while saving");
//     });
//   res.redirect("/chats");
// });

// // Edit Route

// app.get("/chats/:id/edit", async (req, res) => {
//   let { id } = req.params;
//   let chat = await Chat.findById(id);
//   res.render("edit.ejs", { chat });
// });

// // Update Route
// app.put("/chats/:id", async (req, res) => {
//   let { id } = req.params;
//   let { msg: newmsg } = req.body;
//   let updatedChat = await Chat.findByIdAndUpdate(
//     id,
//     { msg: newmsg },
//     { runValidators: true, new: true }
//   );
//   console.log(updatedChat);
//   res.redirect("/chats");
// });

// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });

/****************DELETE Route********************* */
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./Models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method "));

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log("Error connecting to MongoDB:", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Home Route
app.get("/", (req, res) => {
  res.send("Root is working");
});

// Index route
// Chats route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  // res.send("Working");
  res.render("index.ejs", { chats });
});

// New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// Create Route
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  console.log(newChat);
  newChat
    .save()
    .then((res) => {
      console.log("chats saved");
    })
    .catch((err) => {
      console.log("err while saving");
    });
  res.redirect("/chats");
});

// Edit Route

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

// Update Route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newmsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newmsg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

// Delete Route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

app.listen(3000, () => {
  console.log("Server is running on port 8080");
});
