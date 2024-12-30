"use client";
import { JOB_TYPE } from "@/utils/constats";
import SelectList from "./SelectList";
import SelectOption from "./SelectOption";
import InputToggle from "./InputToggle";
import InputFields from "./InputFields";
import TextAreaField from "./TextAreaField";
import BtnSubmit from "./BtnSubmit";
import {useActionState} from "react";
import { jobCreate } from "@/actions/job";
const AddJob = ({ category }) => {
    const [state, action] = useActionState(jobCreate, undefined)
  return (
    <form action={action}>
        <div>
      <InputFields
        name="title"
        placeholder="Masukkan Judul Loker"
        type="text"
        label="Job Title"
      />
    {state?.errors?.title && (
        <p className="text-error mt-2">{state.errors.title}</p>
  
    )}
        </div>
        <div>
      <InputFields
        name="salary"
        placeholder="Masukkan Jumlah Gaji Loker"
        type="number"
        label="Job Salary"
        defaultValue={"0"}
      />
      {state?.errors?.salary && (
        <p className="text-error mt-2">{state.errors.salary}</p>
      )}
        </div>
      <SelectList name="category" labelText="Category" list={category} />
      {state?.errors?.category && (
        <p className="text-error mt-2">{state.errors.category}</p>
      )}
      <SelectOption
        name="jobType"
        labelText="Job Type"
        list={Object.values(JOB_TYPE)}
      />
        {state?.errors?.jobType && (
        <p className="text-error mt-2">{state.errors.jobType}</p>
      )}
      <TextAreaField
        name="requirements"
        label="requirements"
        placeholder="Masukkan Skill2 yang dibutuhkan perusahaan"
      />
      {state?.errors?.requirements && (
        <p className="text-error mt-2">{state.errors.requirements}</p>
      )}
      <TextAreaField
        name="benefit"
        label="benefit"
        placeholder="Masukkan Benefit yang didapat oleh karyawan"
      />
      {state?.errors?.benefit && (
        <p className="text-error mt-2">{state.errors.benefit}</p>
      )}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
        <div>
        <InputFields
          name="city"
          type="text"
          placeholder="Masukkan Kota Perusahaan"
          label="city"
        />
        {state?.errors?.city && (
        <p className="text-error mt-2">{state.errors.city}</p>
      )}
        <InputFields
          name="state"
          type="text"
          placeholder="Masukkan Lokasi Provinsi Perusahaan"
          label="Provinsi"
        />
        {state?.errors?.state && (
        <p className="text-error mt-2">{state.errors.state}</p>
      )}
      </div>
      </div>
      <TextAreaField
        name="address"
        label="Address"
        placeholder="Alamat Kantor"
      />
      {state?.errors?.address && (
        <p className="text-error mt-2">{state.errors.address}</p>
      )}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
        <div>
        <InputFields
          name="companyName"
          type="text"
          placeholder="Nama Perusahaan"
          label="Nama Perusahaan"
        />
        {state?.errors?.companyName && (
        <p className="text-error mt-2">{state.errors.companyName}</p>
      )}
        </div>
        <div>
        <InputFields
          name="contactPhone"
          type="text"
          placeholder="Masukkan Contact Phone"
          label="Contact Phone"
        />
        {state?.errors?.contactPhone && (
        <p className="text-error mt-2">{state.errors.contactPhone}</p>
        )}
        </div>
        <div>
        <InputFields
          name="contactEmail"
          type="text"
          placeholder="Masukkan contact Email"
          label="Email Company"
        />
        {state?.errors?.contactEmail && (
        <p className="text-error mt-2">{state.errors.contactEmail}</p>
        )}
        </div>
      </div>
      <div className="flex justify-between">
        <InputToggle name="isPublish" labelText="Publish" />
        {state?.errors?.isPublish && (
        <p className="text-error mt-2">{state.errors.isPublish}</p>
        )}
        <InputToggle name="remote" labelText="Apakah Remote ?" />
        {state?.errors?.remote && (
        <p className="text-error mt-2">{state.errors.remote}</p>
        )}
      </div>
      <BtnSubmit label="create" />
    </form>
  );
};

export default AddJob;
