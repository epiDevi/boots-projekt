import { Bootdb } from "./model.js";

export async function getAllBoots(_, res) {
  const boots = await Bootdb.find();
  res.json(boots);
}

export async function getBoot(req, res) {
  const { id } = req.params;
  const boot = await Bootdb.findOne({ _id: id });
  res.json(boot);
}

export async function addBoot(req, res) {
  //console.log(req.body);
  const { verfuegberzeit, ...otherBootData } = req.body;
  const boot = new Bootdb({
    ...otherBootData,
    verfuegberzeit: JSON.parse(verfuegberzeit),
  });
  console.log("req.file.path =>", req.file.path);
  boot.foto = req.file.path;
  console.log("boot", boot);
  await boot.save();
  res.end();
}

export async function editBoot(req, res) {
  const { id } = req.params;
  await Bootdb.updateOne({ _id: id }, { ...req.body });
  res.end();
}

export async function deleteBoot(req, res) {
  const { id } = req.params;

  await Bootdb.deleteOne({ _id: id });
  res.end();
}

export async function getVerfuegbaresBoot(req, res) {
  const { from, bis } = req.query;
  //console.log(req.query);
  console.log(from);
  console.log(bis);
  const startDatum = new Date(from);
  const endDatum = new Date(bis);
  console.log(startDatum);
  const verfuegbareBoote = [];
  // const verfuegbareBoote = await Bootdb.find({
  //   $and: [
  //     {
  //       "verfuegberzeit.start": {
  //         $lte: startDatum,
  //       },
  //     },
  //     {
  //       "verfuegberzeit.end": {
  //         $gte: endDatum,
  //       },
  //     },
  //   ],
  // });
  try {
    const reservierteBoote = await Bootdb.find({
      // "reservierungen.reservierungsdatum.start": { $lte: startDatum },
      // "reservierungen.reservierungsdatum.end": { $gte: endDatum },
    });
    console.log("reservierte Boote =>", reservierteBoote);

    // verfuegbareBoote = await Bootdb.find({
    //   "verfuegberzeit.start": { $lte: startDatum },
    //   "verfuegberzeit.end": { $gte: endDatum },
    //   _id: { $nin: reservierteBoote.map((boot) => boot._id) },
    // });
  } catch (error) {
    console.log("my Error =>", error);
  }

  // console.log(verfuegbareBoote);
  res.json(verfuegbareBoote);
}
