import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
const AddReservierung = () => {
  const [fromDate, setFromDate] = useState(null);
  const [bisDate, setBisDate] = useState(null);
  const [boots, setBoots] = useState([]);
  const [selectetBoot, setSelectedBoot] = useState();
  const today = new Date();
  useEffect(() => {
    async function getBoot() {
      if (fromDate && bisDate) {
        const boot = await fetch(
          `${
            import.meta.env.VITE_BACKEND
          }/api/boots/verfuegber?from=${fromDate}&bis=${bisDate}`
        );
        const data = await boot.json();
        //console.log("data=>", data);
        //console.log(fromDate, bisDate);
        setBoots(data);
      }
    }
    getBoot();
  }, [fromDate, bisDate]);

  const saveReserv = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const start = new Date(fromDate);
    start.setDate(start.getDate() + 1);
    const end = new Date(bisDate);
    end.setDate(end.getDate() + 1);
    console.log(start, end);
    form.append(
      "reservierungsdatum",
      JSON.stringify({
        start: start.toISOString(),
        end: end.toISOString(),
      })
    );
    form.append("bootId", selectetBoot);
    console.log("form from addReserv=>", form.get("bootId"));
    await fetch(import.meta.env.VITE_BACKEND + "/api/reserv", {
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
        <h1 className="text-lavendelton mb-4 text-2xl ">Reservieren</h1>
        <section>
          <form
            onSubmit={saveReserv}
            className="flex flex-col border-2 border-gruen p-5 rounded-md"
          >
            <input
              type="text"
              name="kunde"
              placeholder="Name des Kunde"
              className="input input-bordered border-2 border-gruen w-full max-w-xs p-2 my-2"
            />
            <input
              type="text"
              name="kontakt"
              placeholder="Kontakt"
              className="input input-bordered border-2 border-gruen w-full max-w-xs p-2 my-2"
            />
            <div className="p-2 my-2 border-2 border-gruen">
              <label htmlFor="date">Von : </label>
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select date"
                minDate={today}
                className="p-2"
              />
            </div>
            <div className="p-2 my-2 border-2 border-gruen">
              <label htmlFor="date">Bis : </label>
              <DatePicker
                selected={bisDate}
                onChange={(date) => setBisDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select date"
                minDate={fromDate}
                className="p-2"
              />
            </div>
            <select
              name="bootsart"
              defaultValue={"DEFAULT"}
              onChange={(e) => setSelectedBoot(e.target.value)}
              className="select select-bordered w-full max-w-xs p-2 my-2 border-2 border-gruen "
            >
              <option value="DEFAULT" disabled>
                Bootsname
              </option>
              {boots &&
                boots.map((boot, key) => (
                  <option key={key} value={boot._id}>
                    {boot.name}
                  </option>
                ))}
            </select>
            <input
              type="submit"
              value="Reservieren"
              className="cursor-pointer bg-rosa py-3 px-4 rounded-md"
            />
          </form>
        </section>
      </main>
    </>
  );
};

export default AddReservierung;
