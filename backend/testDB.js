const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");

//Create connection
const db = mysql2.createConnection({
  host: "localhost",
  port: 7000,
  user: "root",
  password: "root",
  database: "test1",
});

const app = express();

//Create table

app.get("/createpoststable", () => {
  let sql =
    "CREATE TABLE posts (id int AUTO_INCREMENT, title varchar(255), body varchar(255), PRIMARY KEY (id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    result.send("Posts table created...");
  });
});

//Insert post
app.get("/addpost1", (req, res) => {
  let post = { title: "Post One", body: "This is post number one" };
  let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post 1 added...");
  });
});

//Select posts
app.get("/getposts", (req, res) => {
  let sql = "SELECT * FROM posts";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send("Post fetched...");
  });
});

app.listen("5000", () => {
  console.log("Server started on port 5000 (testDB)");
});
