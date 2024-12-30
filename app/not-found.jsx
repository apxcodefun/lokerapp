import React from 'react'
import Link from "next/link"
const NotFound = () => {
  return (
    <div className='max-w-6xl mx-auto p-8 bg-base-200 text-center items-center'>
        <h1 className='text-6xl font-bold text-error'>404</h1>
        <p className='mt-4 text-lg'>Page Not Found</p>
        <Link href='/' className='btn btn-primary rounded'>Back To Home</Link>
    </div>
  )
}

export default NotFound