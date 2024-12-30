'use client'
import { handleDeleteCategory } from "@/actions/category"
const BtnDeleteCategory = ({idData}) => {
    const handleDelete = async () => {
        const confirm = window.confirm('Are you sure you want to delete this category  ?')
        if(!confirm){
            return;
        }
        await handleDeleteCategory(idData);
    }
  return (
    <button className="btn btn-sm btn-error" onClick={handleDelete}>Delete</button>
  )
}

export default BtnDeleteCategory