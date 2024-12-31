"use client";
import { CiLocationOn, CiMoneyBill, CiTimer } from "react-icons/ci";
import { priceFormat } from "@/utils";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";
import { ApplyJobCreate } from "@/actions/apply";
const DetailJob = ({ job }) => {
  const {
    title,
    companyName,
    address,
    city,
    state,
    remote,
    salary,
    jobType,
    requirements,
    benefit,
    clerkId,
  } = job;

  const { user } = useUser();

  const handleApply = async () => {
    const ApplyJobData = await ApplyJobCreate(job._id);
    if (ApplyJobData.error) {
      toast.error(ApplyJobData.error);
    } else {
      toast.success(ApplyJobData.message);
    }
  };

  return (
    <>
      <div className="card glass min-h-full shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">{title}</h2>
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
          {user && clerkId != user.id ? (
            <>
              <button
                className="btn btn-primary text-white rounded-full"
                onClick={handleApply}
              >
                Apply Job
              </button>
            </>
          ) : (
            <p className="bg-base-200 text-center text-lg font-bold p-5">
              Login For apply this job
            </p>
          )}

          <h1 className="card-title text-info my-2">Skill yang dibutuhkan</h1>
          <p className="whitespace-pre-line">{requirements}</p>
          <h1 className="card-title text-info my-2">Benefit Yang Didapatkan</h1>
          <p className="whitespace-pre-line">{benefit}</p>
        </div>
      </div>
    </>
  );
};

export default DetailJob;
