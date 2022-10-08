const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "harijumat",
});

// Tes koneksi ke database
// db.connect(function (error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.info("Connected to Database");
//   }
// });

app.get("/", (req, res) => {
  res.send("Hello Kusuma");
});
app.listen(8080, () => {
  console.log("Running on Port 8080");
});
