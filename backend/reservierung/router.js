import express from "express";
import multer from "multer";
import { addReservierung, getAllReserv } from "./controller.js";

export const router = new express.Router();
const storage = multer.memoryStorage();

const upload = multer({ storage });

router.get("/", getAllReserv);
router.post("/", upload.none(), addReservierung);
