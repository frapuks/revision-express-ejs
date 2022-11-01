//~ Import Module
import { error } from "../services/errorHandler.js";
import articles from "../db/articles.json" assert { type: "json" };

//~ Function
const renderArticlePage = (req, res) => {
  try {
    const slug = req.params.slug;
    const articleFound = articles.find((article) => article.slug === slug);

    !articleFound && error._404(req, res);
    return res.render("articles", { articles, articleFound });

      // throw new Error("Ici l'erreur forcée");
  } catch (err) {
    return error._500(err, req, res);
  }
};

export { renderArticlePage };
