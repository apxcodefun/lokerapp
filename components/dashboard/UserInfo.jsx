"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const UserInfo = () => {
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
    </>
  );
};

export default UserInfo;
