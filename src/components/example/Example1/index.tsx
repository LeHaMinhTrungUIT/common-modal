import React, { useState } from "react";
import Modal from "../../common/Modal";
import "./index.scss";

const Example1 = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  return (
    <div>
      <h3>Example 1</h3>
      <p>
        This example is modal without header, only with body, footer is 2 action
        buttons, without mask so user can interact with rest of page
      </p>
      <p>{result && `Modal said: User select ${result}`}</p>
      <button onClick={() => setOpenModal(true)}>Open example 1</button>

      <button onClick={() => alert("Interact successfully!")}>
        Test interact
      </button>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        closeIcon={null}
        okText="Yes"
        cancelText="No"
        onOk={() => setResult("Yes")}
        onCancel={() => setResult("No")}
        interactionOutside
        className="example1"
      >
        Are you sure you want to remove this team?
      </Modal>
    </div>
  );
};

export default Example1;
