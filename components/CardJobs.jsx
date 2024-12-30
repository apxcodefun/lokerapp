"use client";
import { useUser } from "@clerk/nextjs";
import { CiMoneyBill, CiLocationOn, CiTimer } from "react-icons/ci";
import Link from "next/link";
import { priceFormat } from "@/utils";
import { toast } from "react-toastify";
import { jobDelete } from "@/actions/job";
const CardJobs = ({ job, url }) => {
  const {
    _id,
    title,
    companyName,
    address,
  city,
    state,
    remote,
    salary,
    jobType,
    clerkId,
  } = job;
  const { user } = useUser();
  const handleDelete = async () => {
      const confirm = window.confirm("Hapus ?")
      if(!confirm){
        return;
      }
      await jobDelete(_id);
      toast.success("Berhasil Dihapus");
  }
  return (
    <>
      <div className="card glass min-h-full shadow-xl">
        <div className="card-body">
          <Link href={url}>
            <h2 className="card-title text-primary">{title}</h2>
          </Link>
          <p className="font-bold">{companyName}</p>
          <div className="badge badge-info rounded-xl badge-xl">
            {remote ? "Remote" : "Onsite"}
          </div>
          <ul className="menu">
            <li>
              <span>
                <CiLocationOn />
                {address}, {city}, {state}
              </span>
            </li>
            <li>
              <span>
                <CiMoneyBill />
                {priceFormat(salary)}
              </span>
            </li>
            <li>
              <span>
                <CiTimer />
                {jobType}
              </span>
            </li>
          </ul>
          {user && user.id == clerkId ? (
            <div className="flex justify-end gap-2 mb-2">
              <Link
                className="btn btn-info text-white btn-sm"
                href={`/dashboard/jobs/${_id}/edit`}
              >
                Edit
              </Link>
              <button className="btn btn-error btn-sm rounded-full" onClick={handleDelete}>
                Delete
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CardJobs;
