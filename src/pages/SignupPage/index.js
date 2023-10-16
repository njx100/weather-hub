import SignupForm from "./SignupForm";
import "./style.css";

const SignupPage = ({ addUserAccount, dataAccount }) => {
  return (
    <div className="middle">
      <SignupForm addUserAccount={addUserAccount} dataAccount={dataAccount} />
    </div>
  );
};

export default SignupPage;
