// =============== Antd ============================
import { DownOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Tree } from "antd";
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
  const [postList, setPostList] = useState([]);

  const menus = useSelector((state) => state.allMenus.menus);

  const handleClick = () => {
    console.log("OK");
  };

  async function fetchPostList() {
    try {
      const requestUrl = "http://192.168.14.91:8099/locationsParent";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      const data = responseJSON;
      dispatch(setMenus(data));

      setPostList(data);
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
    console.log("selected", selectedKeys, info);
  };

  const onClickView = () => {
    navigate("/livecam")
  }

  const treeData = [
    {
      title: "Tòa nhà CT1",
      key: "0-0",
      children: [
        {
          title: (
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: "8px" }}>Tầng 1</span>
              <CustomRightClick />
            </div>
          ),
          key: "0-0-0",
          children: [
            {
              title: (
                <div style={{ display: "flex" }}>
                  <span style={{ marginRight: "8px" }}
                    onClick={onClickView}
                  >Vị trí 1</span>
                  <YoutubeOutlined style={{ marginTop: "5px" }} />
                </div>
              ),
              key: "0-0-0-0",
            },
          ],
        },
        // {
        //   title: "parent 1-1",
        //   key: "0-0-1",
        //   children: [
        //     {
        //       title: "leaf",
        //       key: "0-0-1-0",
        //     },
        //   ],
        // },
        // {
        //   title: "parent 1-2",
        //   key: "0-0-2",
        //   children: [
        //     {
        //       title: "leaf",
        //       key: "0-0-2-0",
        //     },
        //     {
        //       title: "leaf",
        //       key: "0-0-2-1",
        //     },
        //   ],
        // },
      ],
    },
  ];

  // const treeData = [];

  // menus.map((menu) => {
  //   const { id, name } = menu;

  //   // menu.map((data) => {
  //   //   console.log(data.name)
  //   // })

  //   treeData.push({
  //     key: id,
  //     title: name,
  //     children: [
  //       {
  //         title: (
  //           <div style={{ display: "flex" }}>
  //             <span style={{ marginRight: "8px" }}>Vị trí 1</span>
  //             <CustomRightClick />
  //           </div>
  //         ),
  //         // key: id,
  //         // title: name,
  //       },
  //     ],
  //   });
  // });

  return (
    <Tree
      // onClick={onClick}
      showLine
      switcherIcon={<DownOutlined />}
      // onSelect={onSelect}
      treeData={treeData}
      defaultExpandedKeys={["0-0-0"]}
    ></Tree>
  );
};

export default Navigaton;

//mac dinh antd
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
// ]; //** */

//Material
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import TreeItem from "@mui/lab/TreeItem";
// import TreeView from "@mui/lab/TreeView";
// import * as React from "react";

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

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

// const array = {
//   id: "root",
//   name: "Tòa nhà",
//   children: [
//     {
//       id: "0",
//       name: "Vị trí TN-1",
//     },
//     {
//       id: "1",
//       name: "Tầng 1",
//     },
//     {
//       id: "3",
//       name: "Tầng 2",
//       children: [
//         {
//           id: "4",
//           name: "Phòng 1",
//           children: [
//             {
//               id: "5",
//               name: "Vị trí P-1",
//             },
//             {
//               id: "6",
//               name: "Vị trí P-2",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// export default function Navigaton() {
//   const navigate = useNavigate();
//   // const [postList, setPostList] = useState([]);
//   const ref = React.useRef(null);

//   const renderTree = (nodes) => (
//     <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
//       {Array.isArray(nodes.children)
//         ? nodes.children.map((node) => renderTree(node))
//         : null}
//     </TreeItem>
//   );

//   // async function fetchPostList() {
//   //   try {
//   //     const requestUrl = "http://192.168.14.91:8099/locations";

//   //     //http://192.168.12.66:8099/locations/1
//   //     const response = await fetch(requestUrl);
//   //     const responseJSON = await response.json();

//   //     const data = responseJSON;
//   //     console.log(data[0]);

//   //     setPostList(data);
//   //   } catch (error) {
//   //     console.log("Fail to fetch post list: ");
//   //   }
//   // }

//   // useEffect(() => {
//   //   fetchPostList();
//   //   // loadItem();
//   // }, []);

//   const toData = () => {
//     navigate("/livecam", { state: data });
//   };

//   const onClick = (e) => {
//     // console.log("click ", e.target.name);
//     {
//       toData();
//     }
//   };

//   return (
//     <TreeView
//       // onClick={onClick}
//       aria-label="rich object"
//       defaultCollapseIcon={<ExpandMoreIcon />}
//       defaultExpanded={["root"]}
//       defaultExpandIcon={<ChevronRightIcon />}
//       // sx={{fontSize: 20}}
//     >
//       {renderTree(array)}
//     </TreeView>
//   );
// }

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
