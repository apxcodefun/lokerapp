import Profile from "@/models/profile";
import connectDB from "@/configs/database";
import { currentUser } from "@clerk/nextjs/server";
import UpdateProfileForm from "@/components/form/UpdateProfileForm";

const UpdateProfilePage = async () => {
  await connectDB();
  // ambil user yang login
  const user = await currentUser();
  const profile = await Profile.findOne({ clerkId: user.id });
  return (
    <>
      <h1 className="text-primary text-3xl font-bold">Update Profile</h1>
      <UpdateProfileForm
        /* Profile diambil dari props component*/ profile={JSON.parse(
          JSON.stringify(profile)
        )} /*Profile itu diambil dari variable*/
      />
    </>
  );
};

export default UpdateProfilePage;
