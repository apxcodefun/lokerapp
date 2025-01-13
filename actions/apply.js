"use server";
import connectDB from "@/configs/database";
import { auth } from "@clerk/nextjs/server";
import Profile from "@/models/profile";
import ApplyJob from "@/models/applyJob";
import {ApplyJobSchema} from "@/utils/ApplyJob";
import {revalidatePath} from "next/cache"



export async function ApplyJobCreate(jobId) {
  await connectDB();
  const { userId } = await auth();
  const profileDoc = await Profile.findOne({ clerkId: userId });

  if (profileDoc) {
    const Apply = await ApplyJob.findOne({
      profile: profileDoc._id,
      jobs: jobId,
    });
    // Kondisi apabila sudah melakukan apply job
    if (Apply) {
      return {
        error: "Anda sudah melamar pada pekerjaan ini.",
      };
    } else {
      await ApplyJob.create({
        profile: profileDoc._id,
        jobs: jobId,
      });
      return {
        message: "Berhasil melamar pada pekerjaan ini",
      };
    }
  } else {
    return {
      error: "Anda Belum membuat profile",
    };
  }
}


export async function ApplyJobActionUpdate(stateId, formData) {
  await connectDB();
  const validateFields = ApplyJobSchema.safeParse({
    message: formData.get("message"),
    status: formData.get("status")
  })

  if(!validateFields.success){
    return {
      errors : validateFields.error.flatten().fieldErrors,
    }
  }

  const {message, status} = validateFields.data

  const applyJobDoc = await ApplyJob.findByIdAndUpdate(stateId)

  // console.log(applyJobDoc);

  await ApplyJob.findByIdAndUpdate(stateId, {
    message,
    status,
    updatedAt: new Date(),
  })
  
  revalidatePath(`/dashboard/jobs/${applyJobdDoc.jobs}/pelamar`)

  return null

}