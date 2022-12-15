import React from "react";
import { Dropdown, Menu } from "antd";
import {
  PlusOutlined,
  VideoCameraAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import AddView from "../modalView/AddView";
import DeleteView from "../modalView/DeleteView";

const CustomRightClick = ({name,callBack}) => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div>
              Add
              <AddView name={name} callBack={(values) => callBack(values)}/>
            </div>
          ),
          key: "1",
          // icon: <VideoCameraAddOutlined />,
        },
        {
          label: (
            <div>
              Delete
              <DeleteView />
            </div>
          ),
          key: "2",
          // icon: <DeleteOutlined />,
        },
        // {
        //   label: "Edit",
        //   key: "3",
        //   // icon: <EditOutlined />,
        // },
      ]}
    ></Menu>
  );
  return (
    <div className="clickRight">
      <Dropdown overlay={menu}>
        <PlusOutlined />
        {/* <span>Click</span> */}
      </Dropdown>
    </div>
  );
};

export default CustomRightClick;
