import 'dotenv/config';
import express from 'express';
const app = express();
import {router} from './router.js';
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
import {articles} from './modules/articles.js'
app.locals.articles = articles;


app.use(router);
app.use('/', (req, res) => {
    res.status(404).send(`PAGE NOT FOUND`);
})



const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`server listening on : http://localhost:${PORT}`);
})