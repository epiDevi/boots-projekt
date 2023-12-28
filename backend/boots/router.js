import express from "express";
import multer from "multer";
import {
  addBoot,
  deleteBoot,
  getAllBoots,
  getBoot,
  getVerfuegbaresBoot,
} from "./controller.js";
import { useBasicAuth } from "../middleware/basicauth.js";
export const router = new express.Router();

const upload = multer({ dest: "./images" });

router.get("/verfuegber", getVerfuegbaresBoot);
router.get("/:id", getBoot);
router.get("/", getAllBoots);
router.post("/", upload.single("img"), useBasicAuth, addBoot);
router.delete("/:id", deleteBoot);
