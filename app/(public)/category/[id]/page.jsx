import connectDB from "@/configs/database";
import Categories from "@/models/category";
import CardJobs from "@/components/CardJobs";

const DetailCategory = async ({params}) => {
  await connectDB();
  const categoryData = await Categories.findById(params.id).populate("JobList").lean();

  const category = JSON.parse(JSON.stringify(categoryData));

  console.log(category);
  
  return (
    <>
    <h1 className="text-2xl font-bold my-4 text-info">{category.name}</h1>
    <p>{category.description}</p>
    <div className="grid md:grid-cols-3 sm:grid-cols-1 my-5 gap-5">
      {category.JobList.map((item)=>(
          <CardJobs job={item} url={`/job/${item._id}`} key={item._id}/>
      ))}
    </div>
    </>
  )
}

export default DetailCategory;
