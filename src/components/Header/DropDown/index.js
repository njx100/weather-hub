import Dropdown from "antd/es/dropdown/dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import useScrollBlock from "../../useScrollBlock/useScrollBlock";
import {
  AiOutlineLogout,
  AiOutlinePicture,
  AiOutlineDown,
} from "react-icons/ai";
import "./style.css";

const DropDown = ({ setShowChangeBG }) => {
  const [username, setUsername] = useState(sessionStorage.getItem("username"));
  const items = [
    {
      label: (
        <Link onClick={() => setShowChangeBG(true)} className="dropdown-link">
          Change background
        </Link>
      ),
      icon: <AiOutlinePicture />,
      key: "1",
    }, // remember to pass the key prop

    {
      label: (
        <Link to={"./login"} className="dropdown-link">
          Logout
        </Link>
      ),
      icon: <AiOutlineLogout />,
      key: "2",
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <a className="user-dropdown">
        Hi! {username}
        <AiOutlineDown className="dropdown-icon" />
      </a>
    </Dropdown>
  );
};

export default DropDown;
