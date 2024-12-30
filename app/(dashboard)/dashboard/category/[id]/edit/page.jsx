import connectDB from "@/configs/database"
import Categories from "@/models/category"
import EditCategory from "@/components/form/EditCategory";

const EditCategoryPage = async ({params}) => {
    await connectDB();
    let data = await Categories.findById(params.id);
  return (
    <>
    <h1 className="text-primary text-3xl font-bold">Edit Category Uhuy</h1>
    <EditCategory category={data}/>
    </>
  )
}

export default EditCategoryPage