import SignupForm from "./SignupForm";
import "./style.css"

const SignupPage = ({addUserAccount, dataAccount}) => {

  return (
    <div className="signup-form">
      <div className="middle">
      <SignupForm addUserAccount={addUserAccount} dataAccount={dataAccount} />
      </div>
    </div>
  );
};

export default SignupPage;
