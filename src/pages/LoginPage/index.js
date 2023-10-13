import LoginForm from "./LoginForm";
import { useEffect } from "react";
import "./style.css";
const LoginPage = ({ data_Account, fetchUsersData }) => {
  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div className="outer">
      <div className="middle section">
        <LoginForm
          data_Account={data_Account}
          fetchUsersData={fetchUsersData}
        />
      </div>
    </div>
  );
};

export default LoginPage;
