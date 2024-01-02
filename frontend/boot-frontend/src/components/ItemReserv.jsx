import { Link } from "react-router-dom";
const ItemReserv = ({ item }) => {
  return (
    <>
      <div className="border-b-2 border-gruen pl-8 ">
        <Link to={`/reservdetails/${item._id}`}>
          <p className="my-3">reservierung: {item.kunde}</p>
        </Link>
      </div>
    </>
  );
};

export default ItemReserv;
