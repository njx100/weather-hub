import SignupForm from "./SignupForm";
import "./style.css";
import background from "../../utilities/images/background/vecteezy_dramatic-sunset-wildlife-landscape-illustration_10226933.jpg";

const SignupPage = ({ addUserAccount, dataAccount }) => {
  return (
    <div className="middle" style={{ backgroundImage: `url(${background})` }}>
      <SignupForm addUserAccount={addUserAccount} dataAccount={dataAccount} />
    </div>
  );
};

export default SignupPage;
