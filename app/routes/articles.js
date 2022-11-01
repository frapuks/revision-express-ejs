//~ Import modules
import { Router } from "express";
const router = Router();
import {renderArticlePage} from '../controllers/articlePages.js';

//~ Routes
router.get('/saison/:slug', renderArticlePage);


//~Export router
export {router};