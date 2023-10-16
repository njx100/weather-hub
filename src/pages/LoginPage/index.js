import LoginForm from "./LoginForm";
import { useEffect } from "react";
import background from "../../utilities/images/background/vecteezy_vector-illustration-of-mountain-landscape-with-deer-and_11154791.jpg"
import "./style.css";
const LoginPage = ({ dataAccount, getUserInfo }) => {
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="outer">
      <div className="middle section" style={{backgroundImage: `url(${background})`}}>
        <LoginForm
          dataAccount={dataAccount}
          getUserInfo={getUserInfo}
        />
      </div>
    </div>
  );
};

export default LoginPage;
