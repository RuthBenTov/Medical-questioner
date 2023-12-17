import express from "express";
import { sendMail } from "./emailCtrl";

const router = express.Router();

router
.post("/send-mail", sendMail)


export default router;