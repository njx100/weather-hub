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
  const [cities, setCities] = useState([]);
  const cityApi = "https://api.api-ninjas.com/v1/geocoding?city=";
  const apiKey = "Lx/04NVq3uaisIHXy5WPcQ==bjnoRIGlsFFXZUfj";

  const handleSearch = async () => {
    setIsSearching(true);
    const response = await axios({
      method: "get",
      url: cityApi + cityToSearch,
      headers: { "X-Api-Key": apiKey },
    });
    setCities(response.data);
    setIsSearching(false);
  };

  return (
    <div
      className="popup"
      onClick={(event) => {
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
          onChange={(event) => setCityToSearch(event.target.value)}
          onSearch={() => handleSearch()}
        />

        <Button
          className="close-btn"
          onClick={() => {
            setIsPopupOpen(false);
          }}
        >
          <AiOutlineClose className="close-icon" />
        </Button>
        {cities.map((city) => (
          <div className="search-result">
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
