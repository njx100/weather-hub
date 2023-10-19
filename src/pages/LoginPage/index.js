import LoginForm from "./LoginForm";
import { useEffect, useContext } from "react";
// import background from "../../utilities/images/background/vecteezy_vector-illustration-of-mountain-landscape-with-deer-and_11154791.jpg";
import "./style.css";
import BackgroundContext from "../../components/BackgroundContext";

const LoginPage = ({ dataAccount, getUserInfo }) => {
  const backgroundCtx = useContext(BackgroundContext);
  const { background } = backgroundCtx;
  const BackgroundState = `style-blur-bgr ${background}`;

  useEffect(() => {
    document.title = "Login";
    getUserInfo();
  }, []);

  return (
    <div className="outer">
      <div className={BackgroundState}></div>
      <div className="middle section style-blur">
        <LoginForm dataAccount={dataAccount} getUserInfo={getUserInfo} />
      </div>
    </div>
  );
};

export default LoginPage;
