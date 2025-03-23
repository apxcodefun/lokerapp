"use client";
import { CiLocationOn, CiMoneyBill, CiTimer } from "react-icons/ci";
import { priceFormat } from "@/utils";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";
import { ApplyJobCreate } from "@/actions/apply";

const DetailJob = ({ job }) => {
  const { user } = useUser();
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

  const handleApply = async () => {
    const result = await ApplyJobCreate(job._id);
    toast[result.error ? "error" : "success"](result.error || result.message);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">{title}</h2>
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              {companyName}
            </p>
            <span className="inline-block mt-3 px-4 py-1.5 bg-info/10 text-info font-medium rounded-full">
              {remote ? "Remote" : "Onsite"}
            </span>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CiLocationOn className="w-5 h-5" />
              <span>
                {address}, {city}, {state}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CiMoneyBill className="w-5 h-5" />
              <span>{priceFormat(salary)}</span>
            </div>
            <div className="flex items-center gap-2">
              <CiTimer className="w-5 h-5" />
              <span>{jobType}</span>
            </div>
          </div>

          {user && clerkId !== user.id ? (
            <button
              onClick={handleApply}
              className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Apply for this position
            </button>
          ) : (
            <div className="p-4 bg-base-200 rounded-xl text-center">
              <p className="text-lg font-medium">
                Please login to apply for this position
              </p>
            </div>
          )}

          <div className="space-y-6 mt-8">
            <section>
              <h3 className="text-xl font-bold text-info mb-3">
                Required Skills
              </h3>
              <p className="whitespace-pre-line text-gray-600 dark:text-gray-400">
                {requirements}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-info mb-3">Benefits</h3>
              <p className="whitespace-pre-line text-gray-600 dark:text-gray-400">
                {benefit}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailJob;
