import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Checkbox, Form, Input, Select, Space } from "antd";
import "./style.css";
import Swal from "sweetalert2";
import logo from "../../../utilities/153859090/Logo Files/For Web/svg/Color logo - no background.svg";
const { Option } = Select;

const SignupForm = ({ dataAccount, addUserAccount }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    const new_Account = Object.assign(values, {
      favCities: [],
    });
    addUserAccount(new_Account);
    Swal.fire({
      icon: 'success',
      title: 'Congratulations!',
      text: 'Your account is created!',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      } 
    })
  };



  return (
    <div className="card-login-form">
      <div className="logo-signup text-align-center">
        <img src={logo} style={{ width: "50%", backgroundSize: "cover" }} />
      </div>
      <Form
        className="signup"
        form={form}
        name="register"
        onFinish={onFinish}
        layout="vertical"
        scrollToFirstError
      >
        <h3 className="title-login-form pd-title">Create your Account</h3>

        <Form.Item
          className="form-style"
          name="username"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            () => ({
              validator(_, value) {
                const checkUserName = dataAccount.some(
                  (account) => account.username === value
                );
                if (!checkUserName) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(`"${value}" has already been taken!`)
                );
              },
            }),
          ]}
        >
          <Input placeholder="User Name" className="pd-form-signup" />
        </Form.Item>
        <Form.Item
          className="form-style"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
            () => ({
              validator(_, value) {
                const checkUserName = dataAccount.some(
                  (account) => account.email === value
                );
                if (!checkUserName) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(`Email has already been taken!`)
                );
              },
            }),
          ]}
        >
          <Input placeholder="Email" className="pd-form-signup" />
        </Form.Item>

        <Form.Item
          className="form-style"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" className="pd-form-signup" />
        </Form.Item>

        <Form.Item
          className="form-style"
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm Password"
            className="pd-form-signup"
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Please accept the aggrement!")),
            },
          ]}
        >
          <Checkbox
            style={{ color: "white" }}
            onChange={() => setIsAccepted((prev) => !prev)}
          >
            I have read the{" "}
            <a className="text-ques" href="/#">
              agreement
            </a>
          </Checkbox>
        </Form.Item>

        <Space
          direction="vertical"
          style={{
            width: "100%",
            padding: "0 2em",
          }}
        >
          <Button
            htmlType="submit"
            className="btn-signup"
            disabled={!isAccepted}
            type="primary"
            block
            style={{
              background: "black",
              color: "whitesmoke",
              opacity: 0.8,
              fontWeight: 700,
            }}
          >
            Sign up
          </Button>
        </Space>
      </Form>
    </div>
  );
};
export default SignupForm;
