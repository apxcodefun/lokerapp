"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim() !== "") {
      router.push(`/job?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Masukkan Judul Loker"
        className="input w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch} className="btn btn-primary">
        Search
      </button>
    </div>
  );
};

export default InputSearch;
