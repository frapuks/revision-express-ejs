//~ Import modules
import { Router } from "express";
const router = Router();
import { renderHomePage } from "../controllers/homePages.js";

//~ Routes
router.get("/", renderHomePage);

//~Export router
export { router };
