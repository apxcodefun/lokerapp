import mongoose from "mongoose";
const { Schema, models, model } = mongoose;
import Profile from "@/models/profile";
const ApplyJobSchema = new Schema(
  {
    profile: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    jobs: {
      type: Schema.Types.ObjectId,
      ref: "Jobs",
    },
    status: {
      type: String,
      enum: ["Pending", "Declined", "interview"],
      default: "Pending",
    },
    message: {
      type: String,
      default: null,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ApplyJobSchema.virtual("ListPelamar", {
  ref: "Profile",
  localField: "profile",
  foreignField: "_id",
  justOne: true,
});

const ApplyJob = models.ApplyJob || model("ApplyJob", ApplyJobSchema);

export default ApplyJob;