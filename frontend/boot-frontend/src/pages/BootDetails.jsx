import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
const BootDetails = () => {
  const { id } = useParams();
  const [boot, setBoot] = useState();
  useEffect(() => {
    async function getBoot() {
      const boot = await fetch(
        import.meta.env.VITE_BACKEND + "/api/boots/" + id
      );
      const data = await boot.json();
      setBoot(data);
    }
    getBoot();
    console.log(boot);
  }, []);
  const deleteBoot = async () => {
    await fetch(import.meta.env.VITE_BACKEND + "/api/boots/" + id, {
      method: "DELETE",
      body: boot,
    });
  };
  return (
    <>
      <header className="fixed left-0 top-0">
        <Navbar />
      </header>
      <main className="pl-36 flex justify-center items-center h-screen ">
        {boot ? (
          <section className="border-2 border-gruen w-8/12 h-4/6">
            <img
              src={import.meta.env.VITE_BACKEND + "/" + boot.foto}
              alt={boot.name}
            />
            <h1 className="text-3xl">{boot.name}</h1>
            <button
              className="bg-rosa py-3 px-4 rounded-md"
              onClick={deleteBoot}
            >
              delete
            </button>
          </section>
        ) : (
          <h1>Kein boot</h1>
        )}
      </main>
    </>
  );
};

export default BootDetails;
