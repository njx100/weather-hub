import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Select } from "antd";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";
const { Option } = Select;

const SignupForm = ({ data_Account, addUserAccount }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    const new_Account = Object.assign(values, {
      idv4: uuidv4(),
      favCities: [],
    });
    addUserAccount(new_Account);
    console.log(new_Account);
    swal(
      "Success",
      "Congratulations you can now see the weather",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAMAAABjROYVAAAAWlBMVEUDm+X///8AleQAmOQAk+O+3PXh8PvL5Pj1+v4AkeP4/P5ntuuRyPDE4fey2PTb7fqay/Ewoeaj0PJZsOqAv+7p9fw9pedPq+mIxe90uuzS6Phksuqt1POJwu8ND0gQAAAE4klEQVRoge2baXOjMAyGjc0VCAmGQpo0+///5nLHh2Qbmzad2dW3nZ3y1JeOVyqJ3mDkP9RgRXfNqmSwKrt2PwC9JnXLCWF0MkYZIX1ZJ9dvg6aXkrN45Mg2/AaE35P0eGja3IjOE8nk1rhynaBF0jITceO2SX4QtGt6O3Hl8trhalmh+ZlQN+JslJytq7VAi2YfcsY2RQg06+O9yNHiPvOG5veTD3K004dpjw3QbP/OvowSw2Jx6NlrZ18Wn3dDi1vAMpfF3rD7hEBT4vgyTcYI4qJgaBW8zNkofLAg9HIQc6AmrtBn4BWSqE836HHrHC2+uECPOs/VgHPVoOnBzIGqxR0Vmh/wVDRT36sK7Q95n8q/b2bonwM2l32qH6FnE7TyDisCoYpqlRpnODQPR87u4KxSeY5C7+EHurgglUo/MGgV7ono6grUyxE/YGjBw5kvp/chU1kPQ5vwCCo6WoUaPyFo+C2KG/HgortMFe7SC6q9rkCmSqW1Du0CkTozikp5HbkG1Z7WXmatMRUqbVRoHnh1kdzvS6T2hQJNwhaK5ZtFK/ibLXdZoW2QM4o/YaYcnlkrQ9MgJv2DMTs5VKYSNMgxyI7VwFyv0gK9BayU3jFmrnx2jeYzNPVHElriTG3/UgEakHXSFmW22leXIDRDS+/dZSiz0JmE3QWot2fQcq4X8wvaPf6CXv2ZqLoAMpdDnaC+7oj1KLOEPzlkbStUy96+i7nEtwnq5wMZ380krNygpnuE/j6MowLKHd85vkILA5MCFz+AScgKNSQNg7tJwKyfcVQD/DDekG6BPtAtpF/Df1+AdNjANOda7LpAMww6MSE5ANVNrPITyxYo9kw3t6oGPgPT9vpYZYYKrlz9FKrZW+PylLLgUNoKz1CiMpT5tHoZM5S10tMXMlQawDRDFaZApQ+IN5pLVN6glX57gfCxFH+I8ubIfF0k/Z2yG+Bupkc/hwnI3EIVeyzQqy6HgC5ucG+w1jeao+a1OQfVDbIecav3E6C5zZa5RsfVDaoOn6KuHD3Ph3NEjhZo1Ksrxb6N2dWZuYW26Es5VDzdQpjOCokQxDWHSXdRU3dVRkhX9Nu+xBcn63ZkWEJiBqSg7tQ9TDEFhZIkvERRmGxPVick22BZgRdjEnNXL0UqK0C36ULt+K7sVSqg4FIRL3Y9mXKpiBTFNmq3UweXi2IszcDFBB+mWv5jQocqhIumFvcOJgsdaDkDCmELc2/ZpUo6eAg+6ZLfZFChbbEtAbDLdCeoW+bDJFyV6QxZMhi5PZgv7dVFegWoSHFvtk6DmrTXk5qN+TCFh+AmpytUtNA2GiSnR40hFsdVKFMUvl1bJEK+67dOURQRm0GZKe3YqOZCG7OTmEjKbS/T99j8Y59ebSq87WVrzYxU3/4C3uCLMlMrk5GHr8xlamVaFsK4Z8PI3LS1Sdx+Cq2tPf2eRvx3jBxoUszvGK44dnRF6B2boW8ZmDl0NAgs3b95CAqWRX7RuJdPgqkvU9W/rNC3jPANVoVsseew4jiW6b3Y2Hcsc7CMe51syABq5Dtq+wwatR0s/9w5VMzr0KHi0bozdx+f7huHqW2nQfE8aY2j6SuRtJVlY3dAo3eMxC/cS8kJ/cnh/xVc1eX0Zw5s+zMHXtbVDqAHdDLpDzqcDvEAaLD9O9C/n243fRcsDooAAAAASUVORK5CYII="
    );
    navigate("/login");
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
        label="Username"
        tooltip="How would you like others to call you?"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
          () => ({
            validator(_, value) {
              const checkUserName = data_Account.some(
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
          () => ({
            validator(_, value) {
              const checkUserName = data_Account.some(
                (account) => account.email === value
              );
              if (!checkUserName) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(`Email has already been taken!`));
            },
          }),
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
          () => ({
            validator(_, value) {
              const checkUserName = data_Account.some(
                (account) => account.phone === value
              );
              if (!checkUserName) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(`Phone number already in use!`));
            },
            
          }),
          () => ({
            validator(_, value) {
              // console.log((Number(value)))
              if (Number(value)) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Please input your phone number!"));
            },
            
          }),
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
