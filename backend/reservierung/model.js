import mongoose from "mongoose";

const reservierungsschema = mongoose.Schema({
  bootId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "boot",
    required: true,
  },
  reservierungsdatum: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  kunde: String,
  kontakt: String,
});

export const reservierungsdb = mongoose.model(
  "reservierung",
  reservierungsschema
);
