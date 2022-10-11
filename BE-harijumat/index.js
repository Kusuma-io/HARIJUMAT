const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "harijumat",
});

app.post("/regist", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
    [firstName, lastName, email, password],
    (err, result) => {
      console.log(err);
    }
  );
});
// Tes koneksi ke database
// db.connect(function (error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.info("Connected to Database");
//   }
// });

app.listen(8080, () => {
  console.log("Running on Port 8080");
});
