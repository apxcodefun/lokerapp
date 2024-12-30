import Link from "next/link";
import Categories from "@/models/category";
import connectDB from "@/configs/database";
import BtnDeleteCategory from "@/components/form/BtnDeleteCategory";

const Category = async () => {
  await connectDB();
  const categories = await Categories.find();
  return (
    <>
      <Link
        className="btn btn-primary btn-sm"
        href="/dashboard/category/create"
      >
        Create
      </Link>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 2 */}
            {categories.map((item, index) => (
              <tr className="hover" key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td className="gap-2 flex">
                  <Link
                    className="btn btn-sm btn-info"
                    href={`/dashboard/category/${JSON.parse(JSON.stringify(item._id))}/edit`}
                  >
                    Edit
                  </Link>
                  <BtnDeleteCategory idData={JSON.parse(JSON.stringify(item._id))}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Category;
