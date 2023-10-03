import LoginForm from "./LoginForm";

const LoginPage = ({ data_Account }) => {
  return (
    <>
      <LoginForm data_Account={data_Account}/>
    </>
  );
};

export default LoginPage;
