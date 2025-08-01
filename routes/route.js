import express from "express";
import urlCreate from "../controllers/url.js";
const router = express.Router();

router.post("/", urlCreate);

export default router;
