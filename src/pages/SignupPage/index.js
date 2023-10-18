import SignupForm from "./SignupForm";
import "./style.css";
import background from "../../utilities/images/background/vecteezy_vector-illustration-of-mountain-landscape-with-deer-and_11154791.jpg";

const SignupPage = ({ addUserAccount, dataAccount }) => {
  console.log(background);
  return (
    <div className="outer">
      <div
        className="style-blur-bgr"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="middle style-blur">
        <SignupForm addUserAccount={addUserAccount} dataAccount={dataAccount} />
      </div>
    </div>
  );
};

export default SignupPage;
