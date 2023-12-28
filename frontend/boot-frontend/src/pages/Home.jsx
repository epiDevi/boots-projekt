import Navbar from "../components/Navbar";
import { useState, useEffect, useContext } from "react";
import { BootsContext } from "../context/Context";
const Home = () => {
  const { boots } = useContext(BootsContext);
  //const [boots, setBoots] = useState([]);
  // useEffect(() => {
  //   async function getAllBoots() {
  //     const allBoots = await fetch(import.meta.env.VITE_BACKEND + "/api/boots");
  //     const data = await allBoots.json();
  //     setBoots(data);
  //   }
  //   getAllBoots();
  // }, []);
  return (
    <>
      <header className="fixed left-0 top-0">
        <Navbar />
      </header>
      <main className="pl-36 flex justify-around items-center h-screen">
        <section className="border-2 rounded-md border-gruen w-64 h-60 flex flex-col justify-around items-center">
          <h3 className="text-2xl text-lavendelton">Aktuelle Reservierungen</h3>
          <h2 className="text-4xl text-lavendelton">
            {boots.length > 0 ? boots.length : "Keine Boot"}
          </h2>
        </section>
        <section className="border-2 rounded-md border-gruen w-64 h-60 flex flex-col justify-around items-center">
          <h3 className="text-2xl text-lavendelton">Verfügbare Boote</h3>
          <h2 className="text-4xl text-lavendelton">
            {boots.length > 0 ? boots.length : "Keine Boot"}
          </h2>
        </section>
        <section className="border-2 rounded-md border-gruen w-64 h-60 flex flex-col justify-around items-center">
          <h3 className="text-2xl text-lavendelton">Gesamte Boote</h3>
          <h2 className="text-4xl text-lavendelton">
            {boots.length > 0 ? boots.length : "Keine Boot"}
          </h2>
        </section>
      </main>
    </>
  );
};

export default Home;
