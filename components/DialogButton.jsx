"use client";
import { useState } from "react";
import ModalDialog from "./ModalDialog";

const DialogButton = ({ data,dataId }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //   fungsi Handle Open Modal
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-info"
        onClick={() => handleOpenModal(data)} /*(data diambil dari props)*/
      >
        Action
      </button>

      {/* TAmpilan Modalnya */}
      <ModalDialog
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        details={data}
        dataId={dataId} /*(dataId diambil dari props)*/
      />
    </>
  );
};

export default DialogButton;
