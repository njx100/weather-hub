import SignupForm from "./SignupForm";
import "./style.css";
import { useContext } from "react";
import BackgroundContext from "../../components/BackgroundContext";


const SignupPage = ({ addUserAccount, dataAccount }) => {
  const backgroundCtx = useContext(BackgroundContext);
  const { background } = backgroundCtx;

  const BackgroundState = `style-blur-bgr ${background}`

  return (
    <div className="outer">
      <div className={BackgroundState}></div>


      <div className="middle style-blur">
        <SignupForm addUserAccount={addUserAccount} dataAccount={dataAccount} />
      </div>
    </div>
  );
};

export default SignupPage;
