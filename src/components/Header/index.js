import { Link } from "react-router-dom";
import "./style.css";

const Header = ({ username }) => {
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="nav-link">
        <Link to="/">Weather</Link>
        <Link to="/news">News</Link>
      </div>
      <div className="login">
        <Link to="/login">{username}</Link>
      </div>
    </div>
  );
};

export default Header;
