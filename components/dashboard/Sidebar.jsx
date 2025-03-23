"use client";
import { usePathname } from "next/navigation";
import DashboardList from "@/utils/DashboardList";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-100 shadow-sm flex flex-col">
      {/* Logo Section */}
      <div className="py-6 px-4 border-b border-gray-100">
        <Link href="/" className="flex items-center justify-center">
          <Image
            height={48}
            width={48}
            src={Logo}
            className="object-contain"
            alt="Company logo"
          />
          <span className="ml-3 text-xl font-bold text-gray-800">JobBoard</span>
        </Link>
      </div>

      {/* Navigation Section */}
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Dashboard
        </p>

        {DashboardList.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`
              flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200
              ${
                pathname === item.href
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }
            `}
          >
            {item.icon && <span className="mr-3 h-5 w-5">{item.icon}</span>}
            <span className="capitalize">{item.label}</span>

            {pathname === item.href && (
              <span className="ml-auto h-2 w-2 rounded-full bg-indigo-600"></span>
            )}
          </Link>
        ))}
      </div>

      {/* Footer Section */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-500">
          <p className="font-medium text-gray-700 mb-1">Need help?</p>
          <p>Check our documentation or contact support for assistance.</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
