import { Bootdb } from "../boots/model.js";
import { reservierungsdb } from "./model.js";

export async function getAllReserv(req, res) {
  const reservierungen = await reservierungsdb.find();
  res.json(reservierungen);
}

export async function addReservierung(req, res) {
  //console.log("req.body=>", req.body);

  const { bootId, reservierungsdatum, ...otherData } = req.body;
  console.log(reservierungsdatum);
  const reserv = new reservierungsdb({
    bootId,
    ...otherData,
    reservierungsdatum: JSON.parse(reservierungsdatum),
  });
  //const reserv = new reservierungsdb(req.body);

  await reserv.save();

  await Bootdb.findByIdAndUpdate(
    bootId,
    { $push: { reservierungen: reserv._id } },
    { new: true }
  );

  res.end();
}
