import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Checkbox, Form, Input, Select, Space } from "antd";
import "./style.css";
import swal from "sweetalert";
import * as Icon from "react-feather";
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
    console.log(new_Account);
    swal(
      "Success",
      "Congratulations you can now see the weather",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAMAAABjROYVAAAAWlBMVEUDm+X///8AleQAmOQAk+O+3PXh8PvL5Pj1+v4AkeP4/P5ntuuRyPDE4fey2PTb7fqay/Ewoeaj0PJZsOqAv+7p9fw9pedPq+mIxe90uuzS6Phksuqt1POJwu8ND0gQAAAE4klEQVRoge2baXOjMAyGjc0VCAmGQpo0+///5nLHh2Qbmzad2dW3nZ3y1JeOVyqJ3mDkP9RgRXfNqmSwKrt2PwC9JnXLCWF0MkYZIX1ZJ9dvg6aXkrN45Mg2/AaE35P0eGja3IjOE8nk1rhynaBF0jITceO2SX4QtGt6O3Hl8trhalmh+ZlQN+JslJytq7VAi2YfcsY2RQg06+O9yNHiPvOG5veTD3K004dpjw3QbP/OvowSw2Jx6NlrZ18Wn3dDi1vAMpfF3rD7hEBT4vgyTcYI4qJgaBW8zNkofLAg9HIQc6AmrtBn4BWSqE836HHrHC2+uECPOs/VgHPVoOnBzIGqxR0Vmh/wVDRT36sK7Q95n8q/b2bonwM2l32qH6FnE7TyDisCoYpqlRpnODQPR87u4KxSeY5C7+EHurgglUo/MGgV7ono6grUyxE/YGjBw5kvp/chU1kPQ5vwCCo6WoUaPyFo+C2KG/HgortMFe7SC6q9rkCmSqW1Du0CkTozikp5HbkG1Z7WXmatMRUqbVRoHnh1kdzvS6T2hQJNwhaK5ZtFK/ibLXdZoW2QM4o/YaYcnlkrQ9MgJv2DMTs5VKYSNMgxyI7VwFyv0gK9BayU3jFmrnx2jeYzNPVHElriTG3/UgEakHXSFmW22leXIDRDS+/dZSiz0JmE3QWot2fQcq4X8wvaPf6CXv2ZqLoAMpdDnaC+7oj1KLOEPzlkbStUy96+i7nEtwnq5wMZ380krNygpnuE/j6MowLKHd85vkILA5MCFz+AScgKNSQNg7tJwKyfcVQD/DDekG6BPtAtpF/Df1+AdNjANOda7LpAMww6MSE5ANVNrPITyxYo9kw3t6oGPgPT9vpYZYYKrlz9FKrZW+PylLLgUNoKz1CiMpT5tHoZM5S10tMXMlQawDRDFaZApQ+IN5pLVN6glX57gfCxFH+I8ubIfF0k/Z2yG+Bupkc/hwnI3EIVeyzQqy6HgC5ucG+w1jeao+a1OQfVDbIecav3E6C5zZa5RsfVDaoOn6KuHD3Ph3NEjhZo1Ksrxb6N2dWZuYW26Es5VDzdQpjOCokQxDWHSXdRU3dVRkhX9Nu+xBcn63ZkWEJiBqSg7tQ9TDEFhZIkvERRmGxPVick22BZgRdjEnNXL0UqK0C36ULt+K7sVSqg4FIRL3Y9mXKpiBTFNmq3UweXi2IszcDFBB+mWv5jQocqhIumFvcOJgsdaDkDCmELc2/ZpUo6eAg+6ZLfZFChbbEtAbDLdCeoW+bDJFyV6QxZMhi5PZgv7dVFegWoSHFvtk6DmrTXk5qN+TCFh+AmpytUtNA2GiSnR40hFsdVKFMUvl1bJEK+67dOURQRm0GZKe3YqOZCG7OTmEjKbS/T99j8Y59ebSq87WVrzYxU3/4C3uCLMlMrk5GHr8xlamVaFsK4Z8PI3LS1Sdx+Cq2tPf2eRvx3jBxoUszvGK44dnRF6B2boW8ZmDl0NAgs3b95CAqWRX7RuJdPgqkvU9W/rNC3jPANVoVsseew4jiW6b3Y2Hcsc7CMe51syABq5Dtq+wwatR0s/9w5VMzr0KHi0bozdx+f7huHqW2nQfE8aY2j6SuRtJVlY3dAo3eMxC/cS8kJ/cnh/xVc1eX0Zw5s+zMHXtbVDqAHdDLpDzqcDvEAaLD9O9C/n243fRcsDooAAAAASUVORK5CYII="
    );
    navigate("/login");
  };
  return (
    <div className="card-login-form">
      <Button 
        onClick={() => {
          navigate("/login");
        }}
        className="return-login"
      >
        <Icon.ArrowLeft size={15} color="#1E2F97" />
        Login Page
      </Button>
      <div className="logo-signup text-align-center">
        <Icon.Sunrise />
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
          <Checkbox onChange={() => setIsAccepted((prev) => !prev)}>
            I have read the{" "}
            <a className="rules-agreement" href="/#">
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
            style={{ background: "#1E2F97", color: "whitesmoke" }}
          >
            Sign up
          </Button>
        </Space>
      </Form>
      <div className="pd-form pd-login-icon">
        <p className="text-align-center">- Or sign up with -</p>
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
    </div>
  );
};
export default SignupForm;
