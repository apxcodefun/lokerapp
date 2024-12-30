import InputSearch from "@/components/InputSearch";
import CardJobs from "@/components/CardJobs";
import Jobs from "@/models/job";
import connectDB from "@/configs/database";
const Homepage = async () => {
  await connectDB();
  const jobs = await Jobs.find().limit(3).sort({ createdAt: -1 });
  return (
    <>
      <section className="bg-info px-7 py-4">
        <InputSearch />
      </section>
      <h1 className="text-3xl font-bold text-info underline my-5">
        Loker Paling Baru
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 my-3 gap-5">
        {jobs.map((item) => (
          <CardJobs
            key={item._id}
            job={JSON.parse(JSON.stringify(item))}
            url={`/jobs/${item._id}`}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
