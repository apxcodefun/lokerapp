"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs";

const InputSearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim() !== "") {
      router.push(`/job?search=${encodeURIComponent(search)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="flex items-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all duration-300">
        <div className="flex-shrink-0 pl-4 text-gray-400">
          <BsSearch className="h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder="Masukkan Judul Loker"
          className="w-full py-3 px-4 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          className="flex-none bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 transition-colors duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
