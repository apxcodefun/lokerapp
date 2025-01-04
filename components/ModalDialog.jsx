"use client";

import { useActionState } from "react";
import SelectOption from "./form/SelectOption";
import TextAreaField from "./form/TextAreaField";
import BtnSubmit from "./form/BtnSubmit";
import { ApplyJobActionUpdate } from '@/actions/apply';

const ModalDialog = ({ isOpen, onClose, details }) => {
  const [state, action] = useActionState(ApplyJobActionUpdate, details._id);
  const listStatus = ["pending", "interview", "rejected"];

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-5xl">
        <h2 className="text-4xl font-bold">List Pelamar</h2>
        <p className="py-4">
          {details.firstName} {details.lastName}
        </p>
        <p className="mt-2 text-base-content">{details.biodata}</p>

        <div className="flex w-full flex-col">
          <div className="divider">Form Update Status</div>
        </div>

        <div className="mt-2">
          <form action={action}>
            <SelectOption labelText="Pilih Status" name="status" list={listStatus} />
            {state?.errors?.status && (
              <p className="text-error mt-2">{state.errors.status}</p>
            )}
            <TextAreaField
              name="message"
              label="Message"
              placeholder="Masukkan Pesan kepada pelamar"
            />
            {state?.errors?.message && (
              <p className="text-error mt-2">{state.errors.message}</p>
            )}
            <BtnSubmit label="Update" />
          </form>
        </div>

        <div className="modal-action">
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDialog;
