import express from "express";
import Article from "../models/articles";
const articleRouter = express.Router();

articleRouter.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

articleRouter.get("/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (article == null) res.redirect("/");
  res.render("articles/show", { article });
});

articleRouter.post("/", async (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });

  try {
    await article.save();
    res.redirect(`/articles/${article.id}`);
  } catch (e) {
    console.log(e);
    res.render("articles/new", { article });
  }
});

export default articleRouter;
