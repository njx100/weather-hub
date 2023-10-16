import { useState, useEffect } from "react";
import Header from "../../components/Header";
import CitiesList from "./CitiesList";
import { DEFAULT_USER } from "../../utilities/user";
import axios from "axios";
import { Puff } from "@agney/react-loading";
import "./style.css";

const WeatherPage = () => {
  const [userData, setUserData] = useState(DEFAULT_USER);
  const [isLoading, setIsLoading] = useState(true);
  const userInfoApi = "https://6518f495818c4e98ac5ffd9f.mockapi.io/signup";
  const { username, favCities } = userData;

  const checkSessionStorage = () => {
    if (!sessionStorage.getItem("id") && !sessionStorage.getItem("username")) {
      sessionStorage.setItem("id", "1");
      sessionStorage.setItem("username", "Guest");
    }
  };

  const getUserData = async (id) => {
    setIsLoading(true);
    const response = await axios.get(userInfoApi + "/" + id);

    setUserData(response.data);
    setIsLoading(false);
  }
  

  const updateCitiesList = async (id, cities) => {
    axios.put(userInfoApi + "/" + id, cities);
  };

  useEffect(() => {
    checkSessionStorage();
    getUserData(sessionStorage.getItem("id") || "1");
  }, []);

  return (
    <div className="weather-page">
      <Header />
      <div className="container">
        {!isLoading ? (
          <CitiesList
            favCities={favCities}
            updateCitiesList={updateCitiesList}
          />
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
