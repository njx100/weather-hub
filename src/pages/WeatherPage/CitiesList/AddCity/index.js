import { AiFillPlusCircle } from "react-icons/ai";
import "./style.css";

const AddCity = ({ setIsPopupOpen, isPopupOpen }) => {
  return (
    <div
      className="add-city-card"
      onClick={() => {
        setIsPopupOpen(true);
        console.log(isPopupOpen);
      }}
    >
      <AiFillPlusCircle className="plus-icon" />
    </div>
  );
};

export default AddCity;
