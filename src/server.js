import express from "express";
const PORT = 5000;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(5000);

console.log(`http://localhost:${PORT}`);
