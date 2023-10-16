import Dropdown from "antd/es/dropdown/dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const DropDown = () => {
  const [username, setUsername] = useState(sessionStorage.getItem("username"));
  const items = [
    { label: "Change background", key: "Change background" }, // remember to pass the key prop

    { label: "Logout", key: "login" },
  ];
  return (
    <Dropdown className="user-dropdown" menu={{ items }}>
      <a>Hi! {username}</a>
    </Dropdown>
  );
};

export default DropDown;
