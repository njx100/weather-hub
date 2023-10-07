
import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const LoginForm = ({data_Account}) => {
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log("Received values of form: ", values.username);
    const isLoginAccount = data_Account.some(account => account.nickname === values.username)
    const isPassWordAccount = data_Account.some(password => password.password === values.password)
    console.log(isLoginAccount)
    if (isLoginAccount) {
      if (isPassWordAccount) {
        alert("Login sucsecss")
        navigate("/")

      } else {
        alert("Khong dung :>")
      }
    } else {
      alert("Khong co ten nguoi dung")
    }
    if (values.remember) {
      localStorage.setItem("username", values.username);
      localStorage.setItem("password", values.password);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Handle password recovery logic here");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Handle registration logic here");
  };

  return (
    // <div className=""
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100vh",
    //   }}
    // >
      <Card style={{ width: 500 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Title level={2}>Company Logo </Title>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"

            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"/>
            {/* <a
              style={{ float: "right" }}
              className="login-form-forgot"
              href=""
              onClick={handleForgotPassword}
            >
              Forgot password
            </a> */}
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              // onClick={handleLoginSucsecss}
              className="login-form-button"
              block
            >
              Log in
            </Button>
            Don't have an account{" "}
            <Button 
            style={{padding:0}}
            type="none"
            onClick={() => {navigate("/signup")}}>Sign Up</Button>
          </Form.Item>
        </Form>
      </Card>
    // </div>
  );
};

export default LoginForm;
