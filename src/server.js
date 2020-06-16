import express from "express";
import articleRouter from "../routes/articles";
import mongoose from "mongoose";
import Article from "../models/articles";
import methodOverride from "method-override";

const PORT = 5000;
const app = express();

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });

  res.render("articles/index", { articles });
});

app.use("/articles", articleRouter);

app.listen(5000, () => console.log(`http://localhost:${PORT}`));
