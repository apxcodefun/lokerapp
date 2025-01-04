"use server";
import connectDB from "@/configs/database";
import { redirect } from "next/navigation";
import { ProfileSchemaForm } from "./../utils/ProfileSchema";
import { auth, currentUser } from "@clerk/nextjs/server";
import Profile from "@/models/profile";

export async function AddProfile(state, formData) {
  await connectDB();

  const validateFields = ProfileSchemaForm.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    biodata: formData.get("biodata"),
    linkedin: formData.get("linkedin"),
    portfolio: formData.get("portfolio"),
    // Add more fields as needed
  });

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErros,
    };
  }

  const { firstName, lastName, biodata, linkedin, portfolio } =
    validateFields.data;

  const { emailAddresses, id } = await currentUser();

  let role;
  const ProfileCount = await Profile.countDocuments();
   role = ProfileCount === 0 ? "admin" : "user";


  try {
    const newProfile = new Profile({
      firstName,
      lastName,
      biodata,
      linkedin,
      portfolio,
      role,
      clerkId: id,
      email: emailAddresses[0].emailAddress,
    });
    await newProfile.save();
  } catch (e) {
    console.log(e);
  }

  redirect("/dashboard/profile");
}

export async function UpdateProfile(state, formData) {
  await connectDB();

  const validateFields = ProfileSchemaForm.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    biodata: formData.get("biodata"),
    linkedin: formData.get("linkedin"),
    portfolio: formData.get("portfolio"),
    // Add more fields as needed
  });

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErros,
    };
  }

  const { firstName, lastName, biodata, linkedin, portfolio } =
    validateFields.data;

  try {
   const profileUpdate = await Profile.findByIdAndUpdate(state, {
    firstName, lastName, biodata, linkedin, portfolio
   }) /**State itu di gunakan untuk mengambil data berdasarkan ID */
  } catch (e) {
    console.log(e);
  }

  redirect("/dashboard/profile");
}
