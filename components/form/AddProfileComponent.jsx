"use client";

import InputField from "@/components/form/InputFields";
import BtnSubmit from "@/components/form/BtnSubmit";
import TextAreaField from "@/components/form/TextAreaField";
import { useState, startTransition } from "react";
import { AddProfile } from "@/actions/profile";

const AddProfileComponent = () => {
  const [state, setState] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    startTransition(async () => {
      try {
        const response = await AddProfile(null, formData);
        setState(response);
        console.log("Profile added successfully:", response);
      } catch (error) {
        console.error("Error adding profile:", error);
        setState({ error });
      } finally {
        setIsSubmitting(false);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="my-5">
        <InputField
          placeholder="Masukkan nama depan"
          name="firstName"
          label="First Name"
          type="text"
        />
        {state?.error?.firstName && (
          <p className="text-error mt-2">{state.error.firstName}</p>
        )}
        <InputField
          placeholder="Masukkan nama belakang"
          name="lastName"
          label="Last Name"
          type="text"
        />
        {state?.error?.lastName && (
          <p className="text-error mt-2">{state.error.lastName}</p>
        )}
        <TextAreaField
          name="biodata"
          placeholder="Masukkan biodata Anda"
          label="Biodata"
        />
        {state?.error?.biodata && (
          <p className="text-error mt-2">{state.error.biodata}</p>
        )}
        <InputField
          placeholder="Masukkan link Linkedin"
          name="linkedin"
          label="Linkedin"
          type="text"
        />
        {state?.error?.linkedin && (
          <p className="text-error mt-2">{state.error.linkedin}</p>
        )}
        <InputField
          placeholder="Masukkan link portfolio"
          name="portfolio"
          label="Portfolio"
          type="text"
        />
        {state?.error?.portfolio && (
          <p className="text-error mt-2">{state.error.portfolio}</p>
        )}
        <BtnSubmit label={isSubmitting ? "Processing..." : "Create"} disabled={isSubmitting} />
      </form>
    </>
  );
};

export default AddProfileComponent;
