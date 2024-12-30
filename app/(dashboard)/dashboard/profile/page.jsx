import React from "react";
import connectDB from "@/configs/database";
import Profile from "@/models/profile";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { MdSchool } from "react-icons/md";

const ProfilePage = async () => {
  await connectDB();
  const { userId } = await auth();
  const profile = await Profile.findOne({ clerkId: userId });
  return (
    <>
      {profile ? (
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title text-lg font-bold text-info">
              {profile.fisrtName} {profile.lastName}
            </h2>
            <p className="whitespace-pre-line my-3">{profile.biodata}</p>
            <div className="flex">
              <Link href={profile.linkedin} target="#">
                {" "}
                <CiLinkedin className="w-9 h-9 text-blue-400" />
              </Link>
              <Link href={profile.portfolio} target="#">
                <MdSchool className="w-9 h-9 text-success" />
              </Link>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link
                  href="/dashboard/profile/update"
                  className="btn btn-info text-white rounded"
                ></Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p className="text-lg">
            Data profile tidak ditemukan
            <Link
              href="/dashboard/profile/create"
              className="btn btn-primary rounded-full ml-2 text-blue-600 hover:text-blue-800"
            >
              Create Profile
            </Link>
          </p>
        </>
      )}
    </>
  );
};

export default ProfilePage;
