import connectDB from "@/configs/database"
import Jobs from "@/models/job"
import DetailJob from "@/components/DetailJob"
import DetailCompany from "@/components/DetailCompany"

const page = async ({params}) => {
    await connectDB();
    const job = await Jobs.findById(params.id)
  return (
    <div className="grid md:grid-cols-6 gap-5 mb-5 ">
        <div className="md:col-span-4">
          <DetailJob job={JSON.parse(JSON.stringify(job))}/>
        </div>
        <div className="md:col-span-2">
          <DetailCompany job={JSON.parse(JSON.stringify(job))} />
        </div>

      {/* <DetailCompany id={params.companyId} /> */}
    </div>
  )
}

export default page