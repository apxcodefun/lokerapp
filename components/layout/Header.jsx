import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignInButton, SignedOut } from "@clerk/nextjs";
const Header = () => {
  const navList = [
    { name: "About", url: "/about" },
    { name: "Category", url: "/category" },
    { name: "Jobs", url: "/job" },
  ];
  return (
    <div className="navbar bg-base-300 fixed top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navList.map((item) => (
              <li key={item.name}>
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-link text-xl no-underline">
          <h1 className="text-black">Classic Loker.</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navList.map((item) => (
            <li>
              <Link href={item.url} key={item.id}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="btn btn-primary text-white">Login</button>
          </SignInButton>

        </SignedOut>
        <SignedIn>
          <Link href="/dashboard" className="btn-primary btn text-white">Dashboard </Link>
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
