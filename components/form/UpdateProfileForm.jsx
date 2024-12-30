"use client";

import InputField from "@/components/form/InputFields";
import BtnSubmit from "@/components/form/BtnSubmit";
import TextAreaField from "@/components/form/TextAreaField";
import { useActionState } from "react";
import { UpdateProfile } from "@/actions/profile";

const UpdateProfileForm = ({ profile }) => {
  const [state, action] = useActionState(UpdateProfile, profile._id);

  return (
    <>
      <form action={action} className="my-5">
        <InputField
          placeholder="masukkan nama depan"
          name="firstName"
          label="First Name"
          defaultValue={profile.firstName}
          type="text"
        />
        {state?.error?.firstName && (
          <p className="text-error mt-2">{state.error.firstName}</p>
        )}
        <InputField
          placeholder="masukkan nama panggilan"
          name="lastName"
          label="Last Name"
          defaultValue={profile.lastName}
          type="text"
        />
        {state?.error?.lastName && (
          <p className="text-error mt-2">{state.error.lastName}</p>
        )}
        <TextAreaField
          name="biodata"
          placeholder="masukkan biodata anda"
          defaultValue={profile.biodata}
          label="Biodata"
        />
        {state?.error?.biodata && (
          <p className="text-error mt-2">{state.error.biodata}</p>
        )}
        <InputField
          placeholder="masukkan link Linkedin"
          name="linkedin"
          label="Last Name"
          defaultValue={profile.linkedin}
          type="text"
        />
        {state?.error?.linkedin && (
          <p className="text-error mt-2">{state.error.linkedin}</p>
        )}
        <InputField
          placeholder="masukkan link portfolio"
          name="portfolio"
          label="Portfolio"
          defaultValue={profile.portfolio}
          type="text"
        />
        {state?.error?.portfolio && (
          <p className="text-error mt-2">{state.error.portfolio}</p>
        )}
        <BtnSubmit label="Update" />
      </form>
    </>
  );
};

export default UpdateProfileForm;
