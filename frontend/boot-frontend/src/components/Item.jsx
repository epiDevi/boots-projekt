import { Link } from "react-router-dom";
const Item = ({ boot }) => {
  return (
    <>
      <div className="border-b-2 border-gruen pl-8 ">
        <Link to={`/bootdetails/${boot._id}`}>
          <p className="my-3">
            Boot name: {boot.name} {boot.baujahr} {boot.bootsart}
          </p>
        </Link>
      </div>
    </>
  );
};

export default Item;
