import Dropdown from "antd/es/dropdown/dropdown";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useScrollBlock from "../../useScrollBlock/useScrollBlock";
import {
  AiOutlineLogout,
  AiOutlinePicture,
  AiOutlineDown,
} from "react-icons/ai";
import "./style.css";

const DropDown = ({ setShowChangeBG, checkSessionStorage }) => {
  const [username, setUsername] = useState("");
  const items = [
    {
      label: (
        <Link onClick={() => setShowChangeBG(true)} className="dropdown-link">
          Change background
        </Link>
      ),
      icon: <AiOutlinePicture />,
      key: "1",
    },

    {
      label: (
        <Link to={"/login"} className="dropdown-link">
          {username === "Guest" ? "Please login!" : "Logout"}
        </Link>
      ),
      icon: <AiOutlineLogout />,
      key: "2",
    },
  ];

  useEffect(() => {
    checkSessionStorage();
    setUsername(sessionStorage.getItem("username"));
  }, []);

  return (
    <Dropdown className="dropdown-container" menu={{ items }}>
      <a className="user-dropdown">
        Hi! {username}
        <AiOutlineDown className="dropdown-icon" />
      </a>
    </Dropdown>
  );
};

export default DropDown;
