import { articles } from "./modules/articles.js";

const renderPages = {
    home: (req, res) => {
        res.render('index.ejs', {
            titlePage: "Parcours O'Clock",
        });
    },
    
    contact: (req, res) => {
        res.render('contact.ejs', {
            titlePage: "Contact",
        });
    },

    article: (req, res) => {
        const article = articles.find(article => article.slug === req.params.slug);
        if (article) {
            console.log(article);
            res.render('article.ejs', {article});
        }else{
            res.status(404).send('test');
        }
    },
}

export {renderPages};