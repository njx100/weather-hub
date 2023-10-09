import { useState, useEffect } from "react";
import Header from "../../components/Header";
import CitiesList from "./CitiesList";
import { DEFAULT_USER } from "../../utilities/user";
import axios from "axios";
import {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots,
} from "@agney/react-loading";

// import { v4 as uuidv4 } from "uuid";
import "./style.css";

const WeatherPage = () => {
  const [userData, setUserData] = useState(DEFAULT_USER);
  const [isLoading, setIsLoading] = useState(true);
  const userInfoApi = "https://650c557c47af3fd22f677e50.mockapi.io/user_info/";
  const { userName, favCities, id } = userData;

  const getUserData = async (id) => {
    setIsLoading(true);
    const response = await axios.get(userInfoApi + id);
    setUserData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserData(id);
  }, []);

  return (
    <div className="weather-page">
      <Header userName={userName} />
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
