import "./style.css";
import WeatherForecast from "./WeatherForecast";

const City = ({ name, temperature, weatherStatus }) => {
  const cardClassName = `city-card city-card-${weatherStatus}`;
  return (
    <div className={cardClassName}>
      <div className="city-info">
        <div className="city-name">{name}</div>
        <div className="city-temp">
          {temperature}
          &deg;
        </div>
      </div>
      <WeatherForecast />
    </div>
  );
};

export default City;
