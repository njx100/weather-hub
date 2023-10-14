import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { AiFillSetting } from "react-icons/ai";

import { Dropdown, Space } from "antd";
import "./style.css";
import { Link } from "react-router-dom";

const SettingDropDown = () => {
  const username = sessionStorage.getItem("username");

  const items = [
    {
      key: "1",
      label: "Settings",
    },
    {
      key: "2",
      label: "Change background",
    },
    {
      key: "4",
      label: (
        <Link className="logout" to="/login">
          Logout
        </Link>
      ),
    },
  ];

  return (
    <Dropdown
      className="setting-menu"
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="dropdown-text">
          {username ? username : "Guest"}
          <AiFillSetting />
        </Space>
      </a>
    </Dropdown>
  );
};

export default SettingDropDown;
