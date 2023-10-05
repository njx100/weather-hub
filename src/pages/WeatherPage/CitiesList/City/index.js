import WeatherForecast from "./WeatherForecast";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const City = ({ name, latitude, longitude }) => {
  console.log(`${name} ${latitude} ${longitude}`);
  const [weather, setWeather] = useState({
    name: name,
    current: { temp_c: 0 },
  });
  const weatherAPI = "http://api.weatherapi.com/v1/current.json?key=";
  const KEY = "9ae69f2bc09e40babeb93209230110";
  const cardClassName = `city-card city-card-rain`;

  const getWeather = async () => {
    const res = await axios.get(
      `${weatherAPI}${KEY}&q=${latitude},${longitude}`
    );
    console.log(`${weatherAPI}${KEY}&q=${latitude},${longitude}`);
    setWeather(res.data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className={cardClassName}>
      <div className="city-info">
        <div className="city-name">{name}</div>
        <div className="city-temp">{weather.current.temp_c}&deg;</div>
      </div>
      <WeatherForecast />
    </div>
  );
};

export default City;
