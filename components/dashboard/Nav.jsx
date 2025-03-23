"use client";
import Logo from "@/app/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import DashboarList from "@/utils/DashboardList";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { useState } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                width={36}
                height={36}
                alt="Company Logo"
                className="h-9 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-gray-800 hidden sm:block">
                JobBoard
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {DashboarList.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}

            <SignedIn>
              <SignOutButton>
                <button className="ml-4 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200 font-medium">
                  Log Out
                </button>
              </SignOutButton>
            </SignedIn>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <SignedIn>
              <SignOutButton>
                <button className="mr-4 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm transition-colors duration-200 font-medium">
                  Log Out
                </button>
              </SignOutButton>
            </SignedIn>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <RiCloseLine className="block h-6 w-6" />
              ) : (
                <RiMenu4Line className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100 shadow-lg">
          {DashboarList.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
