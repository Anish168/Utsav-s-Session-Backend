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

User.updateMany({ age: { $gt: 23 } }, { age: 27 }).then((res) => {
  console.log(res);
});

User.findOneAndUpdate({ name: "Cutie" }, { age: 26 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
User.findOneAndUpdate({ name: "Cutie" }, { age: 26 }, { new: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
