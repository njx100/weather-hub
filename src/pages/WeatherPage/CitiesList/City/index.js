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
  const [weatherStatus, setWeatherStatus] = useState("default");
  const weatherAPI = "https://api.weatherapi.com/v1/forecast.json?key=";
  const KEY = "60b46f95aa494b69bbc15546230710";
  const apiEndPoint = "&days=6&aqi=no&alerts=no";
  const cardClassName = `city-card ${weatherStatus}`;

  const handleWeatherCondition = (text) => {
    text = text.toLowerCase();
    text.includes("sunny") && setWeatherStatus("sunny");
    text.includes("clear") && setWeatherStatus("night");
    text.includes("cloudy") && setWeatherStatus("partly-cloudy");
    text.includes("thunder") && setWeatherStatus("thunder-storm");
    text.includes("snow") && setWeatherStatus("snow");
    text.includes("rain") && setWeatherStatus("rain");
  };

  const getWeather = async () => {
    setIsLoading(true);
    const weatherURL = `${weatherAPI}${KEY}&q=${latitude},${longitude}${apiEndPoint}`;
    const res = await axios.get(weatherURL);
    setWeather(res.data);
    handleWeatherCondition(res.data.current.condition.text);
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
            <div className="city-temp">{Math.round(current.temp_c)}&deg;</div>
          </div>
          <WeatherForecast name={name} forecast={forecast} />
        </>
      ) : null}
    </div>
  );
};

export default City;
