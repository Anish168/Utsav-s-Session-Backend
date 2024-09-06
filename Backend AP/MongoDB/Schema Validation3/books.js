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
    min: [1, "Price is too low"],
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

Book.findByIdAndUpdate("33456754321", { price: -200 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
Book.findByIdAndUpdate("33456754321", { price: -100 }, { runValidators: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
