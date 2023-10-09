import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Select } from "antd";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
const { Option } = Select;

const SignupForm = ({ dataAccount, addUserAccount }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    const isUserExists = dataAccount.some(
      (account) => account.nickname === values.nickname
    );
    const isEmailExists = dataAccount.some(
      (emails) => emails.email === values.email
    );
    const isPhoneExists = dataAccount.some(
      (phones) => phones.phone === values.phone
    );

    if (isUserExists) {
      alert(`Name has already`); // test
    } else {
      if (isEmailExists) {
        alert(`Email has already`); // test
      } else {
        if (isPhoneExists) {
          alert(`Phone has already`);  // test
        } else {
          const newAccount = Object.assign(values, { idv4: uuidv4(), favCities: [] });
          addUserAccount(newAccount);
          console.log(newAccount)
          alert("Create Account sucsecss") // test
          navigate("/login")

        }
      }
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    
    <Form
      className="signup"
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "86",
      }}
      layout="vertical"
      scrollToFirstError
    >
      <h2>Create An Account</h2>
      <Form.Item
        className="form-style"
        name="username"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        className="form-style"
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        className="form-style"
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        className="form-style"
        name="confirm"
        label="Confirm Password"
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
        <Input.Password />
      </Form.Item>

      <Form.Item
        className="form-style"
        name="phone"
        label="Phone Number"
        rules={[
          {
            requireda: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        className="form-style"
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item className="btn-form">
        <Button
        type="primary"
          size="larget"
          htmlType="submit"
        className="btn-signup"

        >
          Sign Up
        </Button>
        <Button
          size="larget"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignupForm;
