import { useState, useEffect } from "react";
import Header from "../../components/Header";
import CitiesList from "./CitiesList";
import { DEFAULT_USER } from "../../utilities/user";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import "./style.css";

const WeatherPage = () => {
  const [userData, setUserData] = useState(DEFAULT_USER);

  const userInfoApi = "https://650c557c47af3fd22f677e50.mockapi.io/user_info/";
  const { userName, favCities, id } = userData;
  //   const weatherAPI = "http://api.weatherapi.com/v1/current.json?key=";
  //   const KEY = "9ae69f2bc09e40babeb93209230110";

  //   const getWeather = async (lat, long) => {
  //     const response = await axios.get(`${weatherAPI}${KEY}&q=${lat},${long}`);
  //     // console.log(`${weatherAPI}${KEY}&q=${lat},${long}`);
  //     return response.data;
  //   };

  const getUserData = async (id) => {
    const response = await axios.get(userInfoApi + id);
    setUserData(response.data);
  };

  useEffect(() => {
    getUserData(id);
  }, []);

  return (
    <div className="weather-page">
      <Header userName={userName} />
      <div className="container">
        <CitiesList favCities={favCities} />
      </div>
    </div>
  );
};

export default WeatherPage;
