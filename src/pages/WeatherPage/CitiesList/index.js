import { useState } from "react";
import AddCity from "./AddCity";
import City from "./City";
import SearchPopup from "./SearchPopup";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const CitiesList = ({ favCities, updateCitiesList }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cities, setCities] = useState(favCities);

  const addCity = (city) => {
    const newCities = [...cities, city];
    setCities(newCities);
    updateCitiesList(sessionStorage.getItem("id"), { favCities: newCities });
  };

  const deleteCity = (lat, long) => {
    const newList = cities.filter((city) => {
      if (city.latitude !== lat && city.longitude !== long) {
        return city;
      }
    });
    updateCitiesList(sessionStorage.getItem("id"), { favCities: newList });
  };

  return (
    <div className="cities-list">
      {cities.map(({ latitude, longitude }) => {
        return (
          <City
            key={uuidv4()}
            latitude={latitude}
            longitude={longitude}
            deleteCity={deleteCity}
          />
        );
      })}
      <AddCity setIsPopupOpen={setIsPopupOpen} isPopupOpen={isPopupOpen} />
      {isPopupOpen ? (
        <SearchPopup setIsPopupOpen={setIsPopupOpen} addCity={addCity} />
      ) : null}
    </div>
  );
};

export default CitiesList;
