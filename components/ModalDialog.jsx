"use client";
import { useState } from "react";

const ModalDialog = ({ isOpen, onClose, details }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="text-4xl font-bold">List Pelamar</h2>
        <p className="py-4">
          {details.firstName} {details.lastName}
        </p>
        <div className="btn btn-primary" onClick={onClose}></div>
      </div>
    </div>
  );
};

export default ModalDialog;
