import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReservContext } from "../context/Context";
import Navbar from "../components/Navbar";
import ItemReserv from "../components/ItemReserv";

const AllReservierungs = () => {
  const { reserv, setReserv } = useContext(ReservContext);
  return (
    <>
      <header className="fixed left-0 top-0">
        <Navbar />
      </header>
      <main className="pl-36 flex flex-col w-7/12 ml-28 mt-32">
        <Link
          to={"/addreservierung"}
          className="w-2/12 flex justify-center rounded-t-md text-4xl border-2 border-gruen text-lavendelton py-4 "
        >
          +
        </Link>

        <section className=" border-2 border-gruen text-lavendelton py-4 ">
          {reserv.map((index, key) => (
            <ItemReserv item={index} key={key} />
          ))}
        </section>
      </main>
    </>
  );
};

export default AllReservierungs;
