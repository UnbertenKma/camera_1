// [
//   {
//     id: 1,
//     name: "Tang 1 ",
//     children: [
//       {
//         id: 3,
//         name: "phong IT",
//         children: [
//           {
//             id: 19,
//             name: "Phong 2",
//             children: [],
//           },
//           {
//             id: 17,
//             name: "Phong 1",
//             children: [
//               {
//                 id: 21,
//                 name: "VT1",
//                 children: [],
//               },
//               {
//                 id: 23,
//                 name: "VT3",
//                 children: [],
//               },
//               {
//                 id: 22,
//                 name: "VT2",
//                 children: [],
//               },
//             ],
//           },
//           {
//             id: 20,
//             name: "Phong 3",
//             children: [],
//           },
//         ],
//       },
//       {
//         id: 4,
//         name: "phong Marketing",
//         children: [],
//       },
//       {
//         id: 2,
//         name: "phong Sales",
//         children: [],
//       },
//     ],
//   },
// ];

import { ActionTypes } from "../constants/action-types";

const initialState = {
  menus: [],
};

export const menuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MENUS:
      return { ...state, menus: payload };
    default:
      return state;
  }
};
