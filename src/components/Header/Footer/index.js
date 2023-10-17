import { useNavigate } from "react-router-dom";
import "./style.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div>Powered by </div>
      <a
        className="api-logo"
        href="https://www.weatherapi.com/"
        target="_blank"
      >
        <img
          src="https://cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="weather api logo"
        />
      </a>

      <a
        className="api-logo"
        href="https://developer.nytimes.com/"
        target="_blank"
      >
        <img
          src="https://developer.nytimes.com/files/poweredby_nytimes_150c.png?v=1583354208341"
          alt="new york times logo"
        />
      </a>
    </div>
  );
};

export default Footer;
