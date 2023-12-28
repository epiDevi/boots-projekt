import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { router as bootRouter } from "./boots/router.js";
import { router as reservRouter } from "./reservierung/router.js";
import { router as userRouter } from "./users/router.js";

await mongoose.connect(process.env.MONGODB);

const app = express();
app.use(cors());
//app.use(express.json());
app.use("/api/boots", bootRouter);
app.use("/api/reserv", reservRouter);
app.use("/images", express.static("./images"));
app.use("/api/login", userRouter);

app.listen(process.env.PORT, console.log("serverleuft", process.env.PORT));
