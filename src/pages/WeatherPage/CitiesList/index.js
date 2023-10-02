import { useState } from "react";
import AddCity from "./AddCity";
import City from "./City";
import SearchPopup from "./SearchPopup";

import "./style.css";

const CitiesList = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="cities-list">
      <City name="New York" temperature={30} weatherStatus="sunny" />
      <City name="Tokyo" temperature={29} weatherStatus="rain" />
      <City name="Ho Chi Minh City" temperature={36} weatherStatus="snow" />
      <City name="Bangkok" temperature={20} weatherStatus="thunder-storm" />
      <City name="Sydney" temperature={29} weatherStatus="partly-cloudy" />
      <City name="Paris" temperature={19} weatherStatus="night" />
      <AddCity setIsPopupOpen={setIsPopupOpen} isPopupOpen={isPopupOpen} />
      {isPopupOpen ? <SearchPopup setIsPopupOpen={setIsPopupOpen} /> : null}
    </div>
  );
};

export default CitiesList;
