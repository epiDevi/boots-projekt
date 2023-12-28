import Navbar from "../components/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";

const AddBoot = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date(); // Das heutige Datum

  const saveBoot = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const endDate = new Date(selectedDate);
    endDate.setMonth(endDate.getMonth() + 6);
    console.log(endDate);
    form.append(
      "verfuegberzeit",
      JSON.stringify({
        start: selectedDate.toISOString().split("T")[0],
        end: endDate.toISOString().split("T")[0],
      })
    );
    console.log(form.get("verfuegberzeit"));

    await fetch(import.meta.env.VITE_BACKEND + "/api/boots", {
      method: "POST",
      body: form,
    });
  };

  return (
    <>
      <header className="fixed left-0 top-0">
        <Navbar />
      </header>
      <main className="pl-36 flex flex-col justify-center items-center h-screen">
        <h1 className="text-lavendelton mb-4 text-2xl ">
          Neues Boot hinzufügen
        </h1>
        <section>
          <form
            onSubmit={saveBoot}
            className="flex flex-col border-2 border-gruen p-5 rounded-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered border-2 border-gruen w-full max-w-xs p-2 my-2"
            />
            <input
              type="number"
              name="baujahr"
              placeholder="Baujahr"
              className="input input-bordered w-full max-w-xs p-2 my-2 border-2 border-gruen"
            />
            <input
              type="text"
              name="seriennumber"
              placeholder="Seriennumber"
              className="input input-bordered w-full max-w-xs p-2 my-2 border-2 border-gruen"
            />
            <select
              name="material"
              defaultValue={"DEFAULT"}
              className="select select-bordered w-full max-w-xs p-2 my-2 border-2 border-gruen"
            >
              <option value="DEFAULT" disabled>
                Material
              </option>
              <option>GFK</option>
              <option>Holz</option>
              <option>Metall</option>
              <option>Pappe</option>
              <option>Seelen</option>
            </select>
            <select
              name="bootsart"
              defaultValue={"DEFAULT"}
              className="select select-bordered w-full max-w-xs p-2 my-2 border-2 border-gruen "
            >
              <option value="DEFAULT" disabled>
                Bootsart
              </option>
              <option>Tretboot</option>
              <option>Segelboot</option>
              <option>Luftkissenboot</option>
              <option>Geisterschiff</option>
              <option>Containerschiff</option>
            </select>
            <div className="p-2 my-2 border-2 border-gruen">
              <label htmlFor="date">Verfügber von:</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select date"
                minDate={today}
                className="p-2"
              />
            </div>
            <input
              name="img"
              type="file"
              className="file-input file-input-bordered w-full max-w-xs p-2 my-2 border-2 border-gruen"
            />
            <input type="submit" value="Save" />
          </form>
        </section>
      </main>
    </>
  );
};

export default AddBoot;
