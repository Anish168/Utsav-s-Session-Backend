const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log(`app is listening on port ${3000}`);
});

// app.use((req, res) => {
//   console.log("request recieved");
// });
app.use((req, res) => {
  // console.log(req);
  console.log("request recieved");
  res.send({
    name: "apple",
    color: "red",
  });
});
