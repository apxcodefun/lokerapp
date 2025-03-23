"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { motion } from "framer-motion";

const UserInfo = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const { imageUrl, fullName } = user;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm p-6 flex flex-col sm:flex-row items-center gap-6 border border-gray-100"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-indigo-100 rounded-full blur-md opacity-50 transform scale-95"></div>
        <Image
          src={imageUrl}
          alt={`${fullName}'s profile picture`}
          className="rounded-full object-cover ring-4 ring-white relative z-10"
          width={84}
          height={84}
          priority
        />
        <div className="absolute bottom-0 right-0 bg-green-400 h-4 w-4 rounded-full border-2 border-white z-20"></div>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-gray-500 font-medium mb-1">Selamat Datang,</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          <span className="text-indigo-600">{fullName}</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default UserInfo;
