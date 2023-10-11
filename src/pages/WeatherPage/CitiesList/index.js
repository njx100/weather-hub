import { useState } from "react";
import AddCity from "./AddCity";
import City from "./City";
import SearchPopup from "./SearchPopup";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./style.css";

const CitiesList = ({ favCities }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cities, setCities] = useState(favCities);

  const addCity = (city) => {
    const newCities = [...cities, city];
    setCities(newCities);
  };

  return (
    <div className="cities-list">
      {cities.map(({ name, latitude, longitude }) => {
        return (
          <City
            key={uuidv4()}
            name={name}
            latitude={latitude}
            longitude={longitude}
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
