import { DownOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMenus } from "../redux/actions/menuActions";
import CustomRightClick from "./clickRight/CustomRightClick";

const data = [
  {
    id: 1,
    description: "Day la camera duoc dat tai vi tri 1 ",
  },
  {
    id: 2,
    description: "Day la camera duoc dat tai vi tri 2 ",
  },
];

const Navigaton = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [initData, setInitData] = useState([]);
  const [postList, setPostList] = useState([]);

  const menus = useSelector((state) => state.allMenus.menus);

  const handleClick = () => {
    console.log("OK");
  };

  // const buttonClick = async () => {
  //   const response = await axios.post("http://192.168.14.91:8099/locations",
  //   {
  //     name:"Phong hop m",
  //     parent:"Tang 2"
  //   });
  //   console.log(response);
  // }

  async function fetchPostList() {
    try {
      const requestUrl = "http://192.168.14.91:8099/locationsParent";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      const data = responseJSON;
      dispatch(setMenus(data));
      setPostList(data);
      setInitData(data);
    } catch (error) {
      console.log("Fail to fetch post list: ");
    }
  }

  useEffect(() => {
    fetchPostList();
  }, []);
  console.log("Menus: ", menus);

  const toData = () => {
    navigate("/livecam", { state: data });
  };

  const onClick = (e) => {
    console.log("click ", e);
    {
      toData();
    }
  };

  const onSelect = (selectedKeys, info) => {
    // console.log("selected", selectedKeys, info);
  };

  const onClickView = () => {
    navigate("/livecam");
  };

  const treeData = [];

  menus.map((menu) => {
    const { id, name, children } = menu;
    let treeChildren = [];

    children.map((room) => {
      const { id, name, children } = room;

      let treeRoom = [];
      children.map((index) => {
        const { id, name, abc, children } = index;

        treeRoom.push({
          key: index.id,
          title: (
            <div key={index.id} style={{ display: "flex" }}>
              <span style={{ marginRight: "8px" }}>{index.name}</span>
              <CustomRightClick />
            </div>
          ),
        });
      });

      treeChildren.push({
        key: room.id,
        title: (
          <div key={room.id} style={{ display: "flex" }}>
            <span style={{ marginRight: "8px" }}>{room.name}</span>
            <CustomRightClick />
          </div>
        ),
        children: treeRoom,
      });
    });

    // gốc
    treeData.push({
      key: id,
      title: (
        <div>
          <div key={id} style={{ display: "flex" }}>
            <span style={{ marginRight: "8px" }}>{name}</span>
            <CustomRightClick
              callBack={(values) => setInitData(values)}
              name={name}
            />
          </div>
        </div>
      ),

      // title: <>{name ? name : <CustomRightClick />}</>,
      children: treeChildren,
    });
  });

  return (
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      onSelect={onSelect}
      treeData={treeData}
      defaultExpandedKeys={["0-0-0"]}
    ></Tree>
  );
};

export default Navigaton;
