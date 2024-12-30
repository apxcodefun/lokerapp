import Logo from '@/app/assets/logo.png'
import Link from "next/link"
import Image from 'next/image';
import DashboarList from '@/utils/DashboardList';
import { SignedIn,SignOutButton } from '@clerk/nextjs';

const Nav = () => {
  return (
    <div className="navbar bg-base-300">
  <div className="navbar-start">
    <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {DashboarList.map((item)=> (
            <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
  
        ))}
      </ul>
    </div>
  </div>
  <div className="navbar-center lg:hidden">
    <Image src={Logo} width={30} height={30} alt='Nav Image'/>
  </div>
  <div className="navbar-end">
    <SignedIn>
      <SignOutButton> 
        <button className="btn btn-primary text-white">Log Out</button>
      </SignOutButton>
    </SignedIn>
  </div>
</div>
  )
}

export default Nav