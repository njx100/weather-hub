import "./style.css";

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
  console.log(forecastday[0]);

  return (
    <div className="weather-forecast-container">
      <div className="weather-forecast">
        <div>Mon</div>
        <img src={sunnyIcon} alt="sunny" />
        <div className="weather-forecast-temp">34&deg;</div>
      </div>
    </div>
  );
};

export default WeatherForecast;
