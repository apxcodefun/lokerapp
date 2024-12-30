import connectDB from "@/configs/database";
import Jobs from "@/models/job";
import Categories from "@/models/category";
import EditJob from "@/components/form/EditJob"

const EditJobPage = async ({ params }) => {
  await connectDB();
  const job = await Jobs.findById(params.id);
  const categories = await Categories.find();
  console.log(job,categories)
  return (
    <>
      <h1 className="text-primary font-bold text-3xl"> Edit Job</h1>
      <EditJob job={JSON.parse(JSON.stringify(job))} category={JSON.parse(JSON.stringify(categories))} />
    </>
  );
};

export default EditJobPage;
