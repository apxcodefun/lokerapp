import React from 'react'
import connectDB from '@/configs/database'
import { auth } from '@clerk/nextjs/server'
import Jobs from '@/models/job'
import Link from 'next/link';
import CardJobs from '@/components/CardJobs';

const Jobpage = async () => {
  await connectDB();
  const {userId} = await auth();
  const jobsData = await Jobs.where('clerkId', userId);

  if(!jobsData.length) {
    return (
      <>
        <h1 className="text-primary">Belum ada Data Loker</h1>
        <Link href='/dashboard/jobs/create' className="btn btn-primary rounded-full">Create Jobs</Link>
      </>
    )
  }

  return (
    <>
    <h1 className="text-primary font-bold text-3xl">List Of Job</h1>
    <div className="flex my-2">
      <Link href='/dashboard/jobs/create' className="btn btn-primary rounded-full">Create Jobs</Link>
    </div>
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 my-2">
      {jobsData.map((item) =>(
        <CardJobs job={JSON.parse(JSON.stringify(item))} url={`/dashboard/jobs/${item._id}`}/>
      ))}
    </div>
    </>
  )
}

export default Jobpage