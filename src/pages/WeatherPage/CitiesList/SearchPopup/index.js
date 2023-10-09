import "./style.css";
import { useRef, useState, useEffect } from "react";
import { Input, Button } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
const { Search } = Input;

const SearchPopup = ({ setIsPopupOpen }) => {
  const popupEl = useRef();
  const [isSearching, setIsSearching] = useState(false);
  const [cityToSearch, setCityToSearch] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [cities, setCities] = useState([]);
  const [unableToFind, setUnableToFind] = useState();
  const [count, setCount] = useState(0);

  const CITY_API = "https://api.api-ninjas.com/v1/geocoding?city=";
  const APIKEY = "Lx/04NVq3uaisIHXy5WPcQ==bjnoRIGlsFFXZUfj";

  const handleSearch = async (city) => {
    if (city) {
      setIsSearching(true);
      const response = await axios({
        method: "get",
        url: CITY_API + city,
        headers: { "X-Api-Key": APIKEY },
      });
      setCities(response.data);
      setIsSearching(false);
      setIsTyping(false);
    }
  };

  const handleSelectCity = (city) => {
    console.log(city);
  };

  useEffect(() => {
    if (count) {
      cities.length === 0 ? setUnableToFind(true) : setUnableToFind(false);
    }
    setCount(1);
  }, [cities, cityToSearch, count]);

  return (
    <div
      className="popup"
      onDoubleClick={(event) => {
        if (popupEl.current && !popupEl.current.contains(event.target)) {
          setIsPopupOpen(false);
        }
      }}
    >
      <div className="popup-inner" ref={popupEl}>
        <Search
          className="search-input"
          placeholder="Enter city name"
          size="large"
          loading={isSearching}
          onChange={(event) => {
            setCityToSearch(event.target.value);
            setIsTyping(true);
          }}
          onSearch={() => handleSearch(cityToSearch)}
          onKeyDown={(event) => event.key === "Escape" && setIsPopupOpen(false)}
          autoFocus
        />
        <Button
          className="close-btn"
          onClick={() => {
            setIsPopupOpen(false);
          }}
        >
          <AiOutlineClose className="close-icon" />
        </Button>
        {unableToFind && !isTyping && (
          <div className="warning">Your city does not exist!</div>
        )}
        {cities.map((city) => (
          <div className="search-result" onClick={() => handleSelectCity(city)}>
            <div>{city.name}</div>
            <div>{city.state ? `, ${city.state}` : null}</div>
            <div>{`, ${city.country}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPopup;
