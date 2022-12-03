import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import * as React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const array = {
  id: "root",
  name: "Tòa nhà",
  children: [
    {
      id: "0",
      name: "Vị trí TN-1",
    },
    {
      id: "1",
      name: "Tầng 1",
    },
    {
      id: "3",
      name: "Tầng 2",
      children: [
        {
          id: "4",
          name: "Phòng 1",
          children: [
            {
              id: "5",
              name: "Vị trí P-1",
            },
            {
              id: "6",
              name: "Vị trí P-2",
            },
          ],
        },
      ],
    },
  ],
};

export default function Navigaton() {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );


  // async function fetchPostList() {
  //   try {
  //     const requestUrl = "http://192.168.14.91:8099/locations";

  //     //http://192.168.12.66:8099/locations/1
  //     const response = await fetch(requestUrl);
  //     const responseJSON = await response.json();

  //     const data = responseJSON;
  //     console.log(data[0]);

  //     setPostList(data);
  //   } catch (error) {
  //     console.log("Fail to fetch post list: ");
  //   }
  // }

  // useEffect(() => {
  //   fetchPostList();
  //   // loadItem();
  // }, []);

  const toData = () => {
    navigate("/livecam", { state: data });
  };

  const onClick = (e) => {
    console.log("click ", e);
    {
      toData();
    }
  };

  return (
    <TreeView
      // onClick={onClick}
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRightIcon />}
      // sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {renderTree(array)}
    </TreeView>
  );
}

// const Navigaton = (props) => {

//   return (
//     <Menu
//       onClick={onClick}
//       style={{
//         width: 200,
//       }}
//       mode="inline"
//       items={items}
//     />
//   );
// };

// =============== Antd ============================
// import React, { useState, useEffect } from "react";

// import {
//   AppstoreOutlined,
//   MailOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
// import { Menu } from "antd";

// import { useNavigate, useParams } from "react-router-dom";

// import { NavLink } from "react-router-dom";

// const data = [
//   {
//     id: 1,
//     description: "Day la camera duoc dat tai vi tri 1 ",
//   },
//   {
//     id: 2,
//     description: "Day la camera duoc dat tai vi tri 2 ",
//   },
// ];

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem("Tầng 1", "sub1", <AppstoreOutlined />, [
//     getItem("Vị trí 1", "1"),
//     getItem("Vị trí 2", "2"),
//     getItem("Phòng 1", "sub2", null, [
//       getItem("Vị trí 1", "1-1"),
//       getItem("Vị trí 2", "1-2"),
//     ]),
//     getItem("Phòng 2", "sub3", null, [
//       getItem("Vị trí 1", "2-1"),
//       getItem("Vị trí 2", "2-2"),
//     ]),
//   ]),
//   getItem("Tầng 2", "sub4", <AppstoreOutlined />, [
//     getItem("Vị trí 1", "3"),
//     getItem("Vị trí 2", "4"),
//     getItem("Phòng 1", "sub5", null, [
//       getItem("Vị trí 1", "3-1"),
//       getItem("Vị trí 2", "3-2"),
//     ]),
//     getItem("Phòng 2", "sub6", null, [
//       getItem("Vị trí 1", "4-1"),
//       getItem("Vị tri 2", "4-2"),
//     ]),
//   ]),
// ];

// const Navigaton = (props) => {
//   const navigate = useNavigate();
//   const [postList, setPostList] = useState([]);

//   async function fetchPostList() {
//     try {
//       const requestUrl = "http://192.168.14.91:8099/locations";

//       //http://192.168.12.66:8099/locations/1
//       const response = await fetch(requestUrl);
//       const responseJSON = await response.json();

//       const data = responseJSON;
//       console.log(data[0]);

//       setPostList(data);
//     } catch (error) {
//       console.log("Fail to fetch post list: ");
//     }
//   }

//   useEffect(() => {
//     fetchPostList();
//     // loadItem();
//   }, []);

//   const toData = () => {
//     navigate("/livecam", { state: data });
//   };

//   const onClick = (e) => {
//     console.log("click ", e);
//     {
//       toData();
//     }
//   };

//   return (
//     <Menu
//       onClick={onClick}
//       style={{
//         width: 200,
//       }}
//       mode="inline"
//       items={items}
//     />
//   );
// };

// export default Navigaton;
