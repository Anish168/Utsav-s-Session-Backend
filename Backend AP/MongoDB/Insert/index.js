// const mongoose = require("mongoose");

// main()
//   .then(() => {
//     console.log("connection successful");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/test");
// }
// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/test");
// }

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
// });

// const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({
//   name: "Cutie",
//   email: "utsav@gmail.com",
//   age: 23,
// });
// const user2 = new User({
//   name: "CutieBhai",
//   email: "anish@gmail.com",
//   age: 23,
// });
// user1.save();
// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Inserting multiple row
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
User.insertMany([
  { name: "Utsav", email: "utsav@gmail.com", age: 24 },
  { name: "Anish", email: "utsav1@gmail.com", age: 24 },
  { name: "Cutie", email: "utsav2@gmail.com", age: 24 },
]).then((res) => {
  console.log(res);
});
