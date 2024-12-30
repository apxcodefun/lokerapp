"use client";

import InputField from "@/components/form/InputFields";
import BtnSubmit from "@/components/form/BtnSubmit";
import TextAreaField from "@/components/form/TextAreaField";
import { useActionState } from "react";
import { AddProfile } from "@/actions/profile";

const AddProfileComponent = () => {
  const [state, action] = useActionState(AddProfile, undefined);

  return (
    <>
      <form action={action} className="my-5">
        <InputField
          placeholder="masukkan nama depan"
          name="firstName"
          label="First Name"
          type="text"
        />
        {state?.error?.firstName && (
          <p className="text-error mt-2">{state.error.firstName}</p>
        )}
        <InputField
          placeholder="masukkan nama panggilan"
          name="lastName"
          label="Last Name"
          type="text"
        />
        {state?.error?.lastName && (
          <p className="text-error mt-2">{state.error.lastName}</p>
        )}
        <TextAreaField
          name="biodata"
          placeholder="masukkan biodata anda"
          label="Biodata"
        />
        {state?.error?.biodata && (
          <p className="text-error mt-2">{state.error.biodata}</p>
        )}
        <InputField
          placeholder="masukkan link Linkedin"
          name="linkedin"
          label="Last Name"
          type="text"
        />
        {state?.error?.linkedin && (
          <p className="text-error mt-2">{state.error.linkedin}</p>
        )}
        <InputField
          placeholder="masukkan link portfolio"
          name="portfolio"
          label="Portfolio"
          type="text"
        />
        {state?.error?.portfolio && (
          <p className="text-error mt-2">{state.error.portfolio}</p>
        )}
        <BtnSubmit label="Create" />
      </form>
    </>
  );
};

export default AddProfileComponent;
