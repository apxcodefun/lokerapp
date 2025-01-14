import UserInfo from "@/components/dashboard/UserInfo";
import connectDB from "@/configs/database";
import { auth } from "@clerk/nextjs/server";
import Profile from "@/models/profile";
import ApplyJob from "@/models/applyJob";
import UserStatus from "@/components/dashboard/UserStatus";

const Dashboard = async () => {
  await connectDB();
  const { userId } = await auth(); // Ambil user yang sudah login
  const profileDoc = await Profile.findOne({
    clerkId: userId,
  }).select("_id"); //Perintah Select untuk mengambil data dari profile yang datanya terdapat _id

  const pendingCount = await ApplyJob.countDocuments({
    profile: profileDoc._id,
    status: "Pending",
  });
  const interviewCount = await ApplyJob.countDocuments({
    profile: profileDoc._id,
    status: "Interview",
  });

  const rejectedCount = await ApplyJob.countDocuments({
    profile: profileDoc._id,
    status: "rejected",
  });

  const objStatus = {
    pending: pendingCount,
    interview: interviewCount,
    rejected: rejectedCount,
  };

  return (
    <>
      <UserInfo />
      <div className="grid grid-cols-3 gap-10 mt-5">
        <UserStatus
          title="Pending"
          bgColor="bg-warning"
          count={objStatus.pending}
        />
        <UserStatus
          title="Interview"
          bgColor="bg-success"
          count={objStatus.interview}
        />
        <UserStatus
          title="Rejected"
          bgColor="bg-error"
          count={objStatus.rejected}
        />
      </div>
    </>
  );
};

export default Dashboard;
