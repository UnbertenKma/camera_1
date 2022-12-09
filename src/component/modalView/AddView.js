import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";

const AddView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    onClickName();
    console.log()
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const onClickName = () => {
    console.log("Name")
  }
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
        <Input placeholder="Nhập tên: " onClick={onClickName}/>
        <Input placeholder="Nhập hãng: " />
        <Input placeholder="Vị trí thứ: " />
      </Modal>
    </>
  );
};
export default AddView;
