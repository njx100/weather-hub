import LoginForm from "./LoginForm";
import "./style.css";
const LoginPage = ({ data_Account, setUserId }) => {
  return (
    <div className="outer">
      <div className="middle section">
        <LoginForm data_Account={data_Account} setUserId={setUserId} />
      </div>
    </div>
  );
};

export default LoginPage;
