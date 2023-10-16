import { Form, Input, Button, notification, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-feather";
import {  useEffect, useState } from "react";
import "./style.css";
import logo from "../../../utilities/153859090/Logo Files/For Web/svg/Color logo - no background.svg"

const { Title } = Typography;


const LoginForm = ({ dataAccount }) => {
  
  const [api, contextHolder] = notification.useNotification();

  const [isPassword, setIsPassword] = useState(false);
  const [isUserName, setIsUserName] = useState(false);

  sessionStorage.setItem("id", "");
  sessionStorage.setItem("username", "");
  const navigate = useNavigate();


  const openNotificationWithIcon = (type) => {
    console.log('dataAccount :>> ', dataAccount);
    navigate("#");

    if (!dataAccount.some(e => e.username === isUserName)) {
      api[type]({
        message: `User name does not exist`,
      });
    } else if (!dataAccount.some(e => e.password === isPassword)) {
      console.log(isPassword)
      api[type]({
        message: `Incorrect password` ,
      });
    }}
    

  const onFinish = (values) => {
    console.log(dataAccount);
    dataAccount.some((element) => {
      if (element.username === values.username && element.password === values.password) {
        sessionStorage.setItem("id", element.id);
        sessionStorage.setItem("username", element.username);
        navigate("/");
      }
    });
  };



  return (
    <div className="card-login-form">
      <div className="logo-signup text-align-center">
        <img src={logo} style={{width: "50%"}}/>
      </div>
      <Form
        name="normal_login"
        className="form-login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h3 className="title-login-form pd-title">Login to your Account</h3>
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Please input your Username!" },
          ]}
          className="userName"
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            className="pd-form"
            onChange={(e) => setIsUserName(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            className="pd-form"
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
            onChange={(e) => setIsPassword(e.target.value)}

          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ backgroundColor: "#1E2F97", marginBottom: "0.5em" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            onClick={() => openNotificationWithIcon("error")}
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>
      {/* // Login another  */}
      <div className="pd-form pd-login-icon">
        <p className="text-align-center">- Or sign in with -</p>
        <div className="row g-2">
          <div className="col-4">
            <a
              href="#"
              class="bg-facebook-login rounded text-center text-white-force p-3 d-block"
            >
              <Icon.Facebook color="#5D82D1" />
            </a>
          </div>
          <div className="col-4">
            <a
              href="#"
              class="bg-github rounded text-center text-white-force p-3 d-block"
            >
              <Icon.GitHub color="black" />
            </a>
          </div>
          <div className="col-4">
            <a
              href="#"
              class="bg-twitter rounded text-center text-white-force p-3 d-block"
            >
              <Icon.Twitter color="rgb(37,160,237)" />
            </a>
          </div>
        </div>
      </div>
      {/* Create new account  */}
      <div className="text-align-center">
        Don't have an account?{" "}
        <Button
          style={{ padding: 0, color: "#1E2F97", fontWeight: 600 }}
          type="none"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </Button>
      </div>
      {contextHolder}
    </div>
  );
};

export default LoginForm;
