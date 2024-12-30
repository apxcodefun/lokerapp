"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const { imageUrl, fullName } = user;
  return (
    <>
      <div className="flex items-center gap-10">
        <Image
          src={imageUrl}
          alt="apalah Itu"
          className="rounded-full"
          width={100}
          height={100}
        />
        <h1 className="text-3xl font-bold">
          Selamat Datang,<span className="text-primary">{fullName}</span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-5">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
