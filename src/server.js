import express from "express";
import articleRouter from "../routes/articles";

const PORT = 5000;

const app = express();

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "test article1",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "test article2",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "test article3",
      createdAt: new Date(),
      description: "Test description",
    },
  ];
  const date = new Date();
  res.render("articles/index", { articles });
});

app.listen(5000);

console.log(`http://localhost:${PORT}`);
