import { Link } from "react-router-dom";
import { useState } from "react";
import useScrollBlock from "../useScrollBlock/useScrollBlock";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./style.css";
import DropDown from "./DropDown";
import ChangeBackGround from "./DropDown/ChangeBackground";

const Header = ({ checkSessionStorage }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showChangeBG, setShowChangeBG] = useState(false);
  const dashboardClassname = `${showMenu ? "dashboard-showed" : null}`;
  const [blockScroll, allowScroll] = useScrollBlock();
  const [selectedBG, setSelectedBG] = useState("a");

  return (
    <div className="header">
      {showMenu ? null : (
        <button
          className="menu-btn"
          onClick={() => {
            console.log("block header");
            setShowMenu(true);
            blockScroll();
          }}
        >
          <AiOutlineMenu className="menu-icon" />
        </button>
      )}
      <div className={`dashboard-container ${dashboardClassname}`}>
        <div className="dashboard">
          <button
            className="header-close-btn"
            onClick={() => {
              setShowMenu(false);
              allowScroll();
            }}
          >
            <AiOutlineClose className="header-close-icon" />
          </button>
          <Link to={"/"}>Weather</Link>
          <Link to={"/news"}>News</Link>
          <Link to={"/about"}>About</Link>
        </div>
      </div>
      <DropDown
        setShowChangeBG={setShowChangeBG}
        checkSessionStorage={checkSessionStorage}
        className="dropdown"
      />
      {showChangeBG && (
        <ChangeBackGround
          setShowChangeBG={setShowChangeBG}
          selectedBG={selectedBG}
          setSelectedBG={setSelectedBG}
        />
      )}
    </div>
  );
};

export default Header;
