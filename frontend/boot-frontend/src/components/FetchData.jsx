// FetchBoots.jsx
import { useContext, useEffect } from "react";
import { BootsContext, ReservContext } from "../context/Context";

const FetchData = () => {
  const { setBoots } = useContext(BootsContext);
  const { setReserv } = useContext(ReservContext);

  useEffect(() => {
    async function getAllBoots() {
      try {
        const allBoots = await fetch(
          import.meta.env.VITE_BACKEND + "/api/reserv"
        );
        const data = await allBoots.json();
        setReserv(data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Boot-Daten:", error);
      }
    }
    async function getAllReservierungen() {
      try {
        const allBoots = await fetch(
          import.meta.env.VITE_BACKEND + "/api/boots"
        );
        const data = await allBoots.json();
        setBoots(data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Boot-Daten:", error);
      }
    }

    getAllBoots();
    getAllReservierungen();
  }, []);

  return null;
};

export default FetchData;
