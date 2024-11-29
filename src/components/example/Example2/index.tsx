import React, { useState } from "react";
import Modal from "../../common/Modal";
import IMG_1 from "../../../asset/img/mock1.jpeg";
import IMG_2 from "../../../asset/img/mock2.jpeg";
import IMG_3 from "../../../asset/img/mock3.jpeg";
import IMG_4 from "../../../asset/img/mock4.jpeg";
import IMG_5 from "../../../asset/img/mock5.jpeg";
import "./index.scss";

const IMG_LIST = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5];

const Example2 = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <div>
      <h3>Example 2</h3>
      <p>This example is modal with header, body, without footer</p>
      <button onClick={() => setOpenModal(true)}>Open example 2</button>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        footer={null}
        header="Billions"
        className="example2"
        maskClosable
      >
        <div className="selected-img">
          <img src={IMG_LIST[selectedIndex]} />
        </div>
        <div className="img-list">
          {IMG_LIST.map((img, index) => (
            <img
              src={img}
              alt="img-list"
              key={index}
              className="img"
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Example2;
