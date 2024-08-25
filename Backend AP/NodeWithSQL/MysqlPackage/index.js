// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "app",
//   password: "admin",
// });

// try {
//   connection.query("SHOW TABLES", (err, result) => {
//     if (err) throw err;
//      console.log(result); //result actually array h
//      console.log(result.length);
//      console.log(result[0]);
//      console.log(result[1]);
//   });
// } catch (err) {
//   console.log(err);
// }

// let q = "SHOW TABLES";
// try {
//   connection.query(q, (err, result) => {
//     if (err) throw err;
//      console.log(result); //result actually array h
//      console.log(result.length);
//      console.log(result[0]);
//      console.log(result[1]);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

/***************************************************************/
// insert user

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "app",
//   password: "admin",
// });

// // let q = "Insert into user (id, username, email, password) values (?, ?, ?, ?) ";
// // let user = ["1", "Cutie", "cutie@gmail.com", "cutie"];

// // try {
// //   connection.query(q, user, (err, result) => {
// //     if (err) throw err;
// //     console.log(result);
// //   });
// // } catch (err) {
// //   console.log(err);
// // }
// let q = "Insert into user (id, username, email, password) values ? ";
// // inserting multiples rows
// let users = [
//   ["101", "Cutiepie", "cutie123@gmail.com", "cutie"],
//   ["2", "utsav", "utsav@gmail.com", "anish"],
// ];
// try {
//   connection.query(q, [users], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

/****************************************************************** */
// Insert in bulk
const mysql = require("mysql2");
const { faker } = require("@faker-js/faker");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "app",
  password: "admin",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
    faker.date.birthdate(),
  ];
};

let q = "Insert into user (id, username, email, password) values ? ";

let data = [];
for (let i = 1; i <= 100; i++) {
  //   console.log(getRandomUser());
  data.push(getRandomUser()); //100 fake users data
}
try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();
