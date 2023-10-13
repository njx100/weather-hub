import { useState, useEffect } from "react";
import Header from "../../components/Header";
import CitiesList from "./CitiesList";
import { DEFAULT_USER } from "../../utilities/user";
import axios from "axios";
import { Puff } from "@agney/react-loading";

// import { v4 as uuidv4v4 } from "uuidv4";
import "./style.css";

const WeatherPage = () => {
  const [userData, setUserData] = useState(DEFAULT_USER);
  const [isLoading, setIsLoading] = useState(true);
  const userInfoApi = "https://6518f495818c4e98ac5ffd9f.mockapi.io/signup";
  const { username, favCities } = userData;

  const getUserData = async (idv4) => {
    setIsLoading(true);
    const response = await axios.get(userInfoApi + "/" + idv4);
    console.log(response.data.idv4)
    setUserData(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getUserData(sessionStorage.getItem("idv4"));
  }, []);

  return (
    <div className="weather-page">
      <Header username={username} />
      <div className="container">
        {!isLoading ? (
          <CitiesList favCities={favCities} />
        ) : (
          <div className="loading-container">
            <Puff className="loading-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherPage;
