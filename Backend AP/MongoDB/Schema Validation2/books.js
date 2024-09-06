const mongoose = require("mongoose");
const { type } = require("os");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlenght: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: 1,
  },
  discount: {
    type: Number,
    default: 0,
  },
  genre: [String],
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);
let book1 = new Book({
  title: "Eat that frog",
  author: "anish",
  price: 1200,
  category: "fiction",
});
let book2 = new Book({
  title: "Eat that dog",
  author: "utsav",
  price: "1200",
  genere: ["comics", "superheroes"],
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
