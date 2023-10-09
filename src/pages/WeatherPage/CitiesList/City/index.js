import WeatherForecast from "./WeatherForecast";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const City = ({ name, latitude, longitude }) => {
  const [weather, setWeather] = useState({
    current: { temp_c: 0 },
    forecast: "0",
  });
  const [isLoading, setIsLoading] = useState(true);
  const { current, forecast } = weather;

  const weatherAPI = "http://api.weatherapi.com/v1/forecast.json?key=";
  const KEY = "60b46f95aa494b69bbc15546230710";
  const cardClassName = `city-card city-card-rain`;

  const getWeather = async () => {
    setIsLoading(true);
    const weatherURL = `${weatherAPI}${KEY}&q=${latitude},${longitude}`;
    const res = await axios.get(weatherURL);
    setWeather(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className={cardClassName}>
      {!isLoading ? (
        <>
          <div className="city-info">
            <div className="city-name">{name}</div>
            <div className="city-temp">{current.temp_c}&deg;</div>
          </div>
          <WeatherForecast name={name} forecast={forecast} />
        </>
      ) : null}
    </div>
  );
};

export default City;
