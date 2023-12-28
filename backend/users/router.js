import { useBasicAuth } from "../middleware/basicauth.js";
import express from "express";
import multer from "multer";

export const router = new express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.none(), useBasicAuth, function postLogin(_, res) {
  res.json({ success: true });
});
