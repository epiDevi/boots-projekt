import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { TbSailboat } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-36 bg-turkis h-lvh flex flex-col justify-around items-center">
      <Link to={"/"}>
        <ImHome className="text-blaugruen text-3xl" title="Home" />
      </Link>
      <Link to="/allboots">
        <TbSailboat className="text-blaugruen text-3xl" title="Alle Boote" />
      </Link>
      <Link to={"/allreservierung"}>
        <FaRegCalendarAlt
          className="text-blaugruen text-3xl"
          title="Alle Reservierung"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
