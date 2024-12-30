"use client";

import { categoryCreate } from "@/actions/category";
import { useActionState } from "react";
import InputFields from "./InputFields";
import TextAreaField from "./TextAreaField";
import BtnSubmit from "./BtnSubmit";
const AddCategory = () => {
  const [state, action] = useActionState(categoryCreate, undefined);
  return (
    <form action={action} className="mt-5 ">
      <InputFields name="name" label="Category Name" placeholder="Input Category Name" type="text" />
      {state?.errors?.name && (
        <p className="text-error mt-2">{state.errors.name}</p>
      )}
      <TextAreaField
        name="description"
        label="Description"
        placeholder="Input Category Description"
      />
      {state?.errors?.description && (
        <p className="text-error mt-2">{state.errors.description}</p>
      )}
      <BtnSubmit label="Create"/>
    </form>
  );
};

export default AddCategory;
