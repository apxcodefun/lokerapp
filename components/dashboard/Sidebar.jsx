"use client";
import { usePathname } from 'next/navigation';
import DashboardList from '@/utils/DashboardList';
import Logo from '@/app/assets/logo.png'
import Image from "next/image"
import Link from "next/link"

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <aside className='py-2 px-4 bg-base-300 h-full'>
        <Image height={100} width={100} src={Logo} className='mx-auto' alt='sidebar image' />
        <div className="flex flex-col mt-10 gap-y-2">
            {DashboardList.map((item) =>(
                <Link key={item.label} href={item.href} className={`btn btn-lg ${pathname === item.href ? 'btn-primary' : ''}`}><span className='capitalize'>{item.label}</span></Link>
            ))}
        </div>
    </aside>
  )
}

export default Sidebar