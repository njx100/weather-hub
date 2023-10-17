import { Link } from "react-router-dom";
import { useState } from "react";
import useScrollBlock from "../useScrollBlock/useScrollBlock";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./style.css";
import DropDown from "./DropDown";
import ChangeBackGround from "./DropDown/ChangeBackground";
import Footer from "./Footer";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showChangeBG, setShowChangeBG] = useState(false);
  const dashboardClassname = `${showMenu ? "dashboard-showed" : null}`;
  const [blockScroll, allowScroll] = useScrollBlock();
  const [selectedBG, setSelectedBG] = useState("a");
  const checkSessionStorage = () => {
    if (
      (!sessionStorage.getItem("id") && !sessionStorage.getItem("username")) ||
      (sessionStorage.getItem("id") === "" &&
        sessionStorage.getItem("username") === "")
    ) {
      sessionStorage.setItem("id", "1");
      sessionStorage.setItem("username", "Guest");
    }
  };

  return (
    <div className="header">
      {showMenu ? null : (
        <button
          className="menu-btn"
          onClick={() => {
            console.log("block header");
            setShowMenu(true);
          }}
        >
          <AiOutlineMenu className="menu-icon" />
        </button>
      )}
      <div className={`dashboard-container ${dashboardClassname}`}>
        <div className="dashboard">
          <div className="dashboard-nav">
            <button
              className="header-close-btn"
              onClick={() => {
                setShowMenu(false);
                allowScroll();
              }}
            >
              <AiOutlineClose className="header-close-icon" />
            </button>
            <Link className="nav-item" to={"/"} onClick={() => allowScroll()}>
              Weather
            </Link>
            <Link
              className="nav-item"
              to={"/news"}
              onClick={() => allowScroll()}
            >
              News
            </Link>
            <Link
              className="nav-item"
              to={"/about"}
              onClick={() => allowScroll()}
            >
              About
            </Link>
          </div>
          <div className="dashboard-footer">
            <Footer />
          </div>
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
