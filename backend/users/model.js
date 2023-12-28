import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  vorname: String,
  nachname: String,
  email: String,
  password: String,
});

export const Userdb = mongoose.model("User", userSchema, "users");
