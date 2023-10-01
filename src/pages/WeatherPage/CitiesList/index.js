import City from "./City";
import "./style.css";

const CitiesList = () => {
  return (
    <div className="cities-list">
      <City name="New York" temperature={30} weatherStatus="sunny" />
      <City name="Tokyo" temperature={29} weatherStatus="rain" />
      <City name="Ho Chi Minh City" temperature={36} weatherStatus="snow" />
      <City name="Tokyo" temperature={20} weatherStatus="thunder-storm" />
      <City name="Sydney" temperature={29} weatherStatus="partly-cloudy" />
      <City name="Paris" temperature={19} weatherStatus="night" />
    </div>
  );
};

export default CitiesList;
