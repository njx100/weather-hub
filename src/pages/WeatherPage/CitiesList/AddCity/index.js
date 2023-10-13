import { AiFillPlusCircle } from "react-icons/ai";
import "./style.css";

const AddCity = ({ setIsPopupOpen }) => {
  return (
    <div
      className="add-city-card"
      onClick={() => {
        setIsPopupOpen(true);
      }}
    >
      <AiFillPlusCircle className="plus-icon" />
    </div>
  );
};

export default AddCity;
