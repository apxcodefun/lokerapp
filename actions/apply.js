"use server";
import connectDB from "@/configs/database";
import { auth } from "@clerk/nextjs/server";
import Profile from "@/models/profile";
import ApplyJob from "@/models/applyJob";

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
