// FetchBoots.jsx
import { useContext, useEffect } from "react";
import { BootsContext } from "../context/Context";

const FetchBoots = () => {
  const { setBoots } = useContext(BootsContext);

  useEffect(() => {
    async function getAllBoots() {
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
  }, []);

  return null;
};

export default FetchBoots;
