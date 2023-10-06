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
