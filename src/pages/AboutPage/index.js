import { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import { DEFAULT_USER } from "../../utilities/user";

import "./style.css";
import BackgroundContext from "../../components/BackgroundContext";

const AboutPage = () => {
  const backgroundCtx = useContext(BackgroundContext);
  const { background, setBackground } = backgroundCtx;

  useEffect(() => {
    document.title = "About";
    setBackground("blue-mountain");
  }, []);

  return (
    <div className={background}>
      <Header />
      <div className="container"></div>
    </div>
  );
};

export default AboutPage;
