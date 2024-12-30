"use client";
import { JOB_TYPE } from "@/utils/constats";
import SelectList from "./SelectList";
import SelectOption from "./SelectOption";
import InputToggle from "./InputToggle";
import InputFields from "./InputFields";
import TextAreaField from "./TextAreaField";
import BtnSubmit from "./BtnSubmit";
import {useActionState} from "react";
import { jobEdit } from "@/actions/job";
import { toast } from "react-toastify";
const EditJob = ({ category, job }) => {
    const id = job._id;
    const [state, action] = useActionState(jobEdit, id)
    if(state.error){
        toast.error(state.error)
    }
  return (
    <form action={action}>
        <div>
      <InputFields
        name="title"
        placeholder="Masukkan Judul Loker"
        type="text"
        label="Job Title"
        defaultValue={job.title}
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
        defaultValue={job.salary}
      />
      {state?.errors?.salary && (
        <p className="text-error mt-2">{state.errors.salary}</p>
      )}
        </div>
      <SelectList name="category" labelText="Category" list={category} defaultValue={job.category}/>
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
        defaultValue={job.requirements}
      />
      {state?.errors?.requirements && (
        <p className="text-error mt-2">{state.errors.requirements}</p>
      )}
      <TextAreaField
        name="benefit"
        label="benefit"
        placeholder="Masukkan Benefit yang didapat oleh karyawan"
        defaultValue={job.benefit}
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
          defaultValue={job.city}
        />
        {state?.errors?.city && (
        <p className="text-error mt-2">{state.errors.city}</p>
      )}
        <InputFields
          name="state"
          type="text"
          placeholder="Masukkan Lokasi Provinsi Perusahaan"
          label="Provinsi"
          defaultValue={job.state}
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
        defaultValue={job.address}
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
          defaultValue={job.companyName}
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
          defaultValue={job.contactPhone}
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
          defaultValue={job.contactEmail}
        />
        {state?.errors?.contactEmail && (
        <p className="text-error mt-2">{state.errors.contactEmail}</p>
        )}
        </div>
      </div>
      <div className="flex justify-between">
        <InputToggle name="isPublish" labelText="Publish" defaultChecked={job.isPublish} />
        {state?.errors?.isPublish && (
        <p className="text-error mt-2">{state.errors.isPublish}</p>
        )}
        <InputToggle name="remote" labelText="Apakah Remote ?" defaultChecked={job.remote} />
        {state?.errors?.remote && (
        <p className="text-error mt-2">{state.errors.remote}</p>
        )}
      </div>
      <BtnSubmit label="edit" />
    </form>
  );
};

export default EditJob;
