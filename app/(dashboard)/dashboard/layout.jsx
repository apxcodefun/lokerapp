import React from 'react'
import Nav from '@/components/dashboard/Nav'
import Sidebar from '@/components/dashboard/Sidebar'
const layout = ({children}) => {
  return (
   <main className='grid lg:grid-cols-5'>
      {/* Sidebar */}
      <div className='hidden lg:block lg:col-span-1 lg:min-h-screen'>
        <Sidebar />
      </div>
      {/* Navigation */}
      <div className='lg:col-span-4'>
        <Nav />
        <div className="py-16 px-4 sm:px-8 lg:px-16">
          {/* Main Content */}
          {children}
        </div>
      </div>
   </main>
  )
}

export default layout