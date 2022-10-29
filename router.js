import { Router } from 'express';
const router = Router();
import {renderPages} from './controller.js'


router.get('/', renderPages.home);
router.get('/saison/:slug', renderPages.article);
router.get('/contact', renderPages.contact);




export {router};