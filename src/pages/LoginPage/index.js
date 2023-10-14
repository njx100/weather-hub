import LoginForm from "./LoginForm";
import { useEffect } from "react";
import "./style.css";
const LoginPage = ({ dataAccount, getUserInfo }) => {
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="outer">
      <div className="middle section">
        <LoginForm
          dataAccount={dataAccount}
          getUserInfo={getUserInfo}
        />
      </div>
    </div>
  );
};

export default LoginPage;
