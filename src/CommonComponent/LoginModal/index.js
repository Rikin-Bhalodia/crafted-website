import { Modal } from "antd";
import React, { useState } from "react";
import LogIn from "./customLogin";
import SignUp from "./customSignUp";

const LoginModal = ({ flag, setFlag }) => {
  const [toggle, setToggle] = useState(false);

  const handleOk = () => {
    setFlag(false);
  };
  const handleCancel = () => {
    setFlag(false);
  };

  return (
    <>
      <Modal
        title="Login"
        visible={flag}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        className="login_modal"
      >
        {toggle ? (
          <SignUp setToggle={setToggle} />
        ) : (
          <LogIn setToggle={setToggle} setFlag={setFlag} />
        )}
      </Modal>
    </>
  );
};

export default LoginModal;
