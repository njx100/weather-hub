import { useState, useEffect } from "react";
import Header from "../../components/Header";
import CitiesList from "./CitiesList";
import { DEFAULT_USER } from "../../utilities/user";
import axios from "axios";
import { Puff } from "@agney/react-loading";
// import { v4 as uuidv4 } from "uuid";
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

  const updateCitiesList = async (id, cities) => {
    axios.put(userInfoApi + "/" + id, cities);
  };

  useEffect(() => {
    getUserData(sessionStorage.getItem("id") || "1");
  }, []);

  return (
    <div className="weather-page">
      <Header username={username} />
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
