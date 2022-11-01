//~ Import modules
import { Router } from "express";
const router = Router();
    
//~ Home routes
import {router as homeRouter} from './home.js';
router.use(homeRouter); 

//~ Article routes
import {router as articleRouter} from './articles.js';
router.use(articleRouter);

//~ Contact routes
import {router as contactRouter} from './contact.js';
router.use(contactRouter);

//~ Export router
export {router};