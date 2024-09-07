const mongoose = require("mongoose");
const Chat = require("./Models/chat.js");
main()
  .then(() => {
    console.log("conection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let allChats = [
  {
    from: "Utsav",
    to: "Anish",
    msg: "Mera Bhai",
    created_at: new Date(),
  },
  {
    from: "Anish",
    to: "Utsav",
    msg: "Mera Pyara Bhai",
    created_at: new Date(),
  },
  {
    from: "Anish",
    to: "Cutie",
    msg: "Successfull Mera Bhai",
    created_at: new Date(),
  },
  {
    from: "Utsav",
    to: "Anish Bhai",
    msg: "Test le le mera",
    created_at: new Date(),
  },
];
Chat.insertMany(allChats);
