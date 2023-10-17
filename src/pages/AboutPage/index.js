import { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import { DEFAULT_USER } from "../../utilities/user";
import axios from "axios";
import "./style.css";
import BackgroundContext from "../../components/BackgroundContext";

const AboutPage = () => {
  const [userData, setUserData] = useState(DEFAULT_USER);
  // const [isLoading, setIsLoading] = useState(true);
  const backgroundCtx = useContext(BackgroundContext);
  const { background, setBackground } = backgroundCtx;
  const userInfoApi = "https://6518f495818c4e98ac5ffd9f.mockapi.io/signup";
  // const { favCities } = userData;

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

  // const getUserData = async (id) => {
  //   setIsLoading(true);
  //   const response = await axios.get(userInfoApi + "/" + id);
  //   setUserData(response.data);
  //   setIsLoading(false);
  // };

  // const updateCitiesList = async (id, cities) => {
  //   axios.put(userInfoApi + "/" + id, cities);
  // };

  useEffect(() => {
    setBackground("blue-mountain");
    // getUserData(sessionStorage.getItem("id"));
  }, []);

  return (
    <div className={background}>
      <Header checkSessionStorage={checkSessionStorage} />
      <div className="container"></div>
    </div>
  );
};

export default AboutPage;
