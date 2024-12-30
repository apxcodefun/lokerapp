import connectDB from "@/configs/database";
import Categories from "@/models/category";
import Link from "next/link";

const Categorypage = async () => {
  await connectDB();
  const categories = await Categories.find();
  return (
    <>
      <h1 className="text-info text-3xl text-center underline font-bold">
        List Of Category
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
        {categories.map((item)=>(
        <div className="card bg-base-200 rounded-xl shadow-xl" key={item._id}>
          <div className="card-body">
            <Link href={`/category/${item._id}`}>
            <h2 className="card-title my-2 text-info">{item.name}</h2>
            <p className="my-2">{item.description.substring(0, 100)} ...</p>
            </Link>
          </div>
        </div>

        ))}
      </div>
    </>
  );
};

export default Categorypage;
