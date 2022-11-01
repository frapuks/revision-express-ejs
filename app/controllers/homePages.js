//~ Import Module
import { error } from "../services/errorHandler.js";
import articles from "../db/articles.json" assert { type: "json" };

//~ Function
const renderHomePage = (req, res) => {
  try {
    return res.render("home", { articles });
    //   throw new Error("Ici l'erreur forcée")
  } catch (err) {
    return error._500(err, req, res);
  }
};

export { renderHomePage };
