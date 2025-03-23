"use client";
import { useUser } from "@clerk/nextjs";
import {
  BsCurrencyDollar,
  BsGeoAlt,
  BsClock,
  BsPerson,
  BsPencilSquare,
  BsTrash,
} from "react-icons/bs";
import Link from "next/link";
import { priceFormat } from "@/utils";
import { toast } from "react-toastify";
import { jobDelete } from "@/actions/job";
import { motion } from "framer-motion";

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
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (!confirm) return;
    await jobDelete(_id);
    toast.success("Job successfully deleted");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Status Badge */}
      <div className="relative">
        <div
          className={`absolute top-0 right-0 px-4 py-1 text-xs font-semibold rounded-bl-lg ${
            remote ? "bg-indigo-500 text-white" : "bg-emerald-500 text-white"
          }`}
        >
          {remote ? "Remote" : "Onsite"}
        </div>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <Link href={url} className="group">
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200">
              {title}
            </h2>
          </Link>
          <p className="text-gray-600 font-medium mt-1">{companyName}</p>
        </div>

        {/* Job Details */}
        <div className="space-y-3 mb-5">
          <div className="flex items-center text-gray-600">
            <BsGeoAlt className="text-indigo-500 mr-3" />
            <span className="text-sm truncate">{`${address}, ${city}, ${state}`}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <BsCurrencyDollar className="text-indigo-500 mr-3" />
            <span className="text-sm font-medium">{priceFormat(salary)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <BsClock className="text-indigo-500 mr-3" />
            <span className="text-sm">{jobType}</span>
          </div>
        </div>

        {/* Actions */}
        {user && user.id === clerkId && (
          <div className="pt-4 border-t border-gray-100 flex justify-end gap-2">
            <Link
              href={`/dashboard/jobs/${_id}/edit`}
              className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
            >
              <BsPencilSquare className="mr-1" /> Edit
            </Link>
            <button
              onClick={handleDelete}
              className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
            >
              <BsTrash className="mr-1" /> Delete
            </button>
            <Link
              href={`/dashboard/jobs/${_id}/pelamar`}
              className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors"
            >
              <BsPerson className="mr-1" /> Applicants
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CardJobs;
