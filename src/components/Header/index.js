import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link to="/">Weather</Link>
        <Link to="/news">News</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
