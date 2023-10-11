import "./style.css";
import { v4 as uuidv4 } from "uuid";

const WeatherForecast = ({ name, forecast }) => {
  const sunnyIcon =
    "https://raw.githubusercontent.com/Makin-Things/weather-icons/master/animated/clear-day.svg";
  const cloudyIcon =
    "https://raw.githubusercontent.com/Makin-Things/weather-icons/master/animated/cloudy.svg";
  const rainIcon =
    "https://raw.githubusercontent.com/Makin-Things/weather-icons/master/animated/rainy-3.svg";
  const snowIcon =
    "https://raw.githubusercontent.com/Makin-Things/weather-icons/master/animated/snowy-3.svg";
  const thunderStormIcon =
    "https://raw.githubusercontent.com/Makin-Things/weather-icons/master/animated/thunderstorms.svg";

  const { forecastday } = forecast;
  console.log(forecastday);

  return (
    <div className="weather-forecast-container">
      {forecastday.map((forecastOneDay) => (
        <div key={uuidv4()} className="weather-forecast">
          <div>Mon</div>
          <img src={rainIcon} alt="rain" />
          <div className="weather-forecast-temp">
            <div>{Math.round(forecastOneDay.day.maxtemp_c)}&deg;</div>
            <div>{Math.round(forecastOneDay.day.mintemp_c)}&deg;</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
