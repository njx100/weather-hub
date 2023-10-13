import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const LoginForm = ({ data_Account }) => {
  sessionStorage.setItem("id", "");
  sessionStorage.setItem("username", "");
  const navigate = useNavigate();

  const onFinish = (values) => {
    data_Account.forEach((element) => {
      if (
        element.username === values.username &&
        element.password === values.password
      ) {
        console.log(element.id, " ", element.username);
        sessionStorage.setItem("id", element.id);
        sessionStorage.setItem("username", element.username);
        navigate("/");
      }
    });
  };

  return (
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
            placeholder="Password"
          />
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
            className="login-form-button"
            block
          >
            Log in
          </Button>
          Don't have an account{" "}
          <Button
            style={{ padding: 0 }}
            type="none"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;
