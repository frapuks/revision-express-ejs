//~ Dotenv
import "dotenv/config";

//~ Import modules
import express from "express";
const app = express();
import { router } from "./app/routes/index.js";
import { error } from "./app/services/errorHandler.js";

//~ Define statics
app.use(express.static("./public"));

//~ Motor
app.set("view engine", "ejs");
app.set("views", "./app/views");

//~locals
// import articles from "./app/db/articles.json" assert { type: "json" };
// app.locals.articles = articles;

//~ Routes
app.use(router);

//~ Handle error 404
app.use(error._404);

//~ Launch server
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, (err) => {
  // if error in server, handle it
  if (err) console.log(err.message);
  //launch server
  console.log(`Server listening on : http://localhost:${PORT}`);
});
