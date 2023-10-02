import Header from "../../components/Header";
import CitiesList from "./CitiesList";
import { USERS_INFO } from "../../utilities/user";
import "./style.css";

const WeatherPage = () => {
  const user0 = USERS_INFO[0];
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
