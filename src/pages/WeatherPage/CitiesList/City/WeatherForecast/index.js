import "./style.css";

const WeatherForecast = () => {
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

  return (
    <div className="weather-forecast-container">
      <div className="weather-forecast">
        <div>Mon</div>
        <img src={sunnyIcon} alt="sunny" />
        <div className="weather-forecast-temp">34&deg;</div>
      </div>
      <div className="weather-forecast">
        <div>Tue</div>
        <img src={cloudyIcon} alt="cloudy" />
        <div className="weather-forecast-temp">34&deg;</div>
      </div>
      <div className="weather-forecast">
        <div>Wed</div>
        <img src={rainIcon} alt="rain" />
        <div className="weather-forecast-temp">34&deg;</div>
      </div>
      <div className="weather-forecast">
        <div>Thu</div>
        <img src={snowIcon} alt="snow" />
        <div className="weather-forecast-temp">34&deg;</div>
      </div>
      <div className="weather-forecast">
        <div>Fri</div>
        <img src={thunderStormIcon} alt="thunder storm" />
        <div className="weather-forecast-temp">34&deg;</div>
      </div>
    </div>
  );
};

export default WeatherForecast;
