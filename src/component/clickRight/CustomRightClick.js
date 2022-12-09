import React from "react";
import { Dropdown, Menu } from "antd";
import {
  PlusOutlined,
  VideoCameraAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import AddView from "../modalView/AddView";

const CustomRightClick = () => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div>
              Add
              <AddView />
            </div>
          ),
          key: "1",
          // icon: <VideoCameraAddOutlined />,
        },
        {
          label: "Edit",
          key: "2",
          // icon: <EditOutlined />,
        },
        {
          label: "Delete",
          key: "3",
          // icon: <DeleteOutlined />,
        },
      ]}
    ></Menu>
  );
  return (
    <div className="clickRight">
      <Dropdown overlay={menu}>
        <PlusOutlined />
      </Dropdown>
    </div>
  );
};

export default CustomRightClick;
