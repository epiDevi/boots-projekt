import { useLocation, Link } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Item from "../components/Item";
import { BootsContext } from "../context/Context";
// import { LoginContext } from "../context/Context";
// import { useContext } from "react";
const AllBoots = () => {
  // const { login, setLogin } = useContext(LoginContext);
  const { boots } = useContext(BootsContext);
  // const location = useLocation();
  // console.log("location", location);
  // const boots = location.state ? location.state.boots : [];
  // console.log("boots", boots);
  return (
    <>
      <header className="fixed left-0 top-0">
        <Navbar />
      </header>
      <main className="pl-36 flex flex-col w-7/12 ml-28 mt-32">
        <Link
          to={"/addboot"}
          className="w-2/12 flex justify-center rounded-t-md text-4xl border-2 border-gruen text-lavendelton py-4 "
        >
          +
        </Link>

        {/* else
        {
          <Link
            to={"/login"}
            className="w-2/12 flex justify-center rounded-t-md text-4xl border-2 border-gruen text-lavendelton py-4 "
          >
            login
          </Link>
        } */}
        <section className=" border-2 border-gruen text-lavendelton py-4 ">
          {boots.map((index, key) => (
            <Item boot={index} key={key} />
          ))}
        </section>
      </main>
    </>
  );
};

export default AllBoots;
