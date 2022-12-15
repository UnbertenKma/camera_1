import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import axios, { Axios } from "axios";
import { setMenus } from "../../redux/actions/menuActions";
import { useDispatch } from "react-redux";

const AddView = ({name,callBack}) => {
  const urlAddNodeApi = "http://192.168.14.91:8099/locationsParent";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  // function submit(e) {
  //   e.preventDefault();
  //   Axios.post(urlAddNodeApi, {
  //     name: data.name,
  //   }).then((res) => {
  //     console.log(res.data);
  //   });
  // }

  const handleOk = () => {
    setIsModalOpen(false);

    onClickName();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    
    setData(newdata);
  }

  const onClickName = async (e) => {

    const headers = {
      "Content-Type": "text/json"
  };

    console.log({
      name: data.name,
      parent:name
    })

    const response = await axios.post("http://192.168.14.91:8099/locations",{
      name: data.name,
      parent:name
    });
    console.log(response);
    const res = await axios.get("http://192.168.14.91:8099/locationsParent");
    console.log(res);
    dispatch(setMenus(res.data));

  };

  return (
    <>
      <Button type="ghost" onClick={showModal}>
        <AppstoreAddOutlined />
      </Button>

      <Modal
        title="Enter ..."
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          onChange={(e) => handle(e)}
          value={data.name}
          id="name"
          placeholder="Enter name "
          type="text"
          // onClick={onClickName}
        />
      </Modal>
    </>
  );
};
export default AddView;
