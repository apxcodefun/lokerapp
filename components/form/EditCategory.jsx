"use client";

import { useActionState } from "react";
import InputFields from "./InputFields";
import TextAreaField from "./TextAreaField";
import BtnSubmit from "./BtnSubmit";
import { handleEditCategory } from "@/actions/category";
const EditCategory = ({category}) => {
    const id = category._id
const [state, action] = useActionState(handleEditCategory, id);
  return (
    <form action={action} className="mt-5 ">
      <InputFields
        name="name"
        label="Category Name"
        placeholder="Input Category Name"
        type="text"
        defaultValue={category.name}
      />
      {state?.errors?.name && (
        <p className="text-error mt-2">{state.errors.name}</p>
      )}
      <TextAreaField
        name="description"
        label="Description"
        placeholder="Input Category Description"
        defaultValue={category.description}
      />
      {state?.errors?.description && (
        <p className="text-error mt-2">{state.errors.description}</p> )}
      <BtnSubmit label="Update" />
    </form>
  );
};

export default EditCategory;
