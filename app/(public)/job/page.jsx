import connectDB from "@/configs/database";
import Jobs from "@/models/job";
import CardJobs from "@/components/CardJobs";
const JobPage = async () => {
  await connectDB();
  const jobs = await Jobs.find({ isPublish: true });
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">List Lowongan Kerja</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 my-5">
        {jobs.map((item) => (
          <CardJobs key={item._id} job={JSON.parse(JSON.stringify(item))} url={`job/${item._id}`} />
        ))}
      </div>
    </>
  );
};

export default JobPage;
