import Header from "../../components/Header";
import CitiesList from "./CitiesList";
import "./style.css";

const WeatherPage = () => {
  return (
    <div className="weather-page">
      <Header />
      <div className="container">
        <CitiesList />
      </div>
    </div>
  );
};

export default WeatherPage;
