import SignupForm from "./SignupForm";
import "./style.css"

const SignupPage = ({addUserAccount, data_Account}) => {
  
  return (
    <div className="signup-form">
      <SignupForm addUserAccount={addUserAccount} data_Account={data_Account} />
    </div>
  );
};

export default SignupPage;
