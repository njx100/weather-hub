import LoginForm from "./LoginForm";
import "./style.css";
const LoginPage = ({ dataAccount }) => {
  return (
    <div className="outer">
      <div className="middle section">
        <LoginForm dataAccount={dataAccount} />
      </div>
    </div>
  );
};

export default LoginPage;
