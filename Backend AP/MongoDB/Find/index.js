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

User.find({})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.find({ age: { $gt: 47 } })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.find({ age: { $gt: 47 } })
  .then((res) => {
    console.log(res[0]);
    console.log(res[0].name);
  })
  .catch((err) => {
    console.log(err);
  });

User.findOne({ age: { $gt: 47 } })
  .then((res) => {
    console.log(res[0]);
    console.log(res[0].name);
  })
  .catch((err) => {
    console.log(err);
  });

User.findById("6579008473892")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
