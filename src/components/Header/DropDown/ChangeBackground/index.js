import { AiOutlineClose } from "react-icons/ai";
import { useState, useContext } from "react";
import useScrollBlock from "../../../useScrollBlock/useScrollBlock";
import "./style.css";
import BackgroundContext from "../../../BackgroundContext";

const ChangeBackGround = ({ setShowChangeBG, selectedBG, setSelectedBG }) => {
  //   const [selectedBG, setSelectedBG] = useState("a");
  const { setBackground } = useContext(BackgroundContext);
  const handleClick = (theme, bgName) => {
    setSelectedBG(theme);
    setBackground(bgName);
  };
  const [blockScroll, allowScroll] = useScrollBlock();
  blockScroll();

  return (
    <div className="container-bg">
      <div className="change-bg-popup">
        <button 
          className="hambug-btn"
          onClick={() => {
            allowScroll();
            setShowChangeBG(false);
          }}
        >
          <AiOutlineClose className="change-bg-close-icon" />
        </button>
        <div className="background ">
          <img
            onClick={() => handleClick("a", "weather-page-blue-mountain")}
            className={`theme ${selectedBG === "a" && "active"}`}
            src="https://i.imgur.com/hW4qLSe.jpg"
            alt="blue mountain"
          />
          <p className="theme-text">Blue mountain</p>
        </div>
        <div className="background">
          <img
            onClick={() => handleClick("b", "weather-page-dramatic-sunset")}
            className={`theme ${selectedBG === "b" && "active"}`}
            src="https://i.imgur.com/lvORjj5.jpg"
            alt="dramatic sunset"
          />
          <p className="theme-text">Dramatic sunset</p>
        </div>
        <div className="background">
          <img
            onClick={() => handleClick("c", "weather-page-morning-mountain")}
            className={`theme ${selectedBG === "c" && "active"}`}
            src="https://i.imgur.com/KV7myHQ.jpg"
            alt="morning mountain"
          />
          <p className="theme-text">Morning mountain</p>
        </div>
      </div>
    </div>
  );
};

export default ChangeBackGround;
