import { Router } from "express";
import { createLead, getAllLeads } from "../controllers/lead.controler.js";

const router = Router();

router.route("/leads").get(getAllLeads).post(createLead);

export default router;
