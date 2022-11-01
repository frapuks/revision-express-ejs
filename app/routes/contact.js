//~ Import modules
import { Router } from "express";
const router = Router();
import { renderContactPage } from "../controllers/contactPages.js";

//~ Routes
router.get("/contact", renderContactPage);

//~Export router
export { router };