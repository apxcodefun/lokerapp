'use server'
import { CategoryFormSchema } from "@/utils/CategorySchema";
import connectDB from "@/configs/database";
import Categories from "@/models/category";
import {redirect} from "next/navigation"

export async function categoryCreate(state,formData){
    // Validate form fields
    await connectDB();
    const validateFields = CategoryFormSchema.safeParse({
        name /* <-Diambali dari Schema*/: formData.get('name'),
        description /* <-Diambali dari Schema*/: formData.get('description'),
    })

    if(!validateFields.success){
        return {
            errors : validateFields.error.flatten().fieldErrors,
        }
    }

    const {name, description} = validateFields.data

    try{
        const newCategory = new Categories({
            name,
            description
        })
        await newCategory.save();
    }catch(e){
            console.log(e)
    }
    redirect('/dashboard/category')
}

export async function handleEditCategory(state,formData){
    // Validate form fields
    await connectDB();

    const validateFields = CategoryFormSchema.safeParse({
        name /* <-Diambali dari Schema*/: formData.get('name'),
        description /* <-Diambali dari Schema*/: formData.get('description'),
    })

    if(!validateFields.success){
        return {
            errors : validateFields.error.flatten().fieldErrors,
        }
    }

    const {name, description} = validateFields.data

    const categoryUpdate = await Categories.findByIdAndUpdate(state, {
        name,
        description
    })

    if(!categoryUpdate){
        return {
            errors :"Gagal Update"
        }
    }

    redirect('/dashboard/category')
}

export async function handleDeleteCategory(id){
    await connectDB();
    await Categories.findByIdAndDelete(id)
    redirect('/dashboard/category')
}