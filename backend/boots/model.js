import mongoose from "mongoose";
const bootsschema = mongoose.Schema({
  name: String,
  baujahr: Number,
  seriennumber: String,
  material: String,
  foto: String,
  bootsart: String,
  verfuegberzeit: {
    start: { type: Date },
    end: { type: Date },
  },
  reservierungen: [
    { type: mongoose.Schema.Types.ObjectId, ref: "reservierung" },
  ],
});

export const Bootdb = mongoose.model("boot", bootsschema);
