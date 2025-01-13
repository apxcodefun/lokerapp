"use client";
import { useState } from "react";
import Link from "next/link";

const InputSearch = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Masukkan Judul Loker"
        className="input w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link
        href={`/job?search=${search}`}
        className="btn btn-primary btn-block mt-3 text-white"
      >
        Search
      </Link>
    </>
  );
};

export default InputSearch;
