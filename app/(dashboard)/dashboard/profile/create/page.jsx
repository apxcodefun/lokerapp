import connectDB from '@/configs/database'
import Profile from '@/models/profile'
import { currentUser } from '@clerk/nextjs/server';
import {redirect} from "next/navigation"

import AddProfileComponent from '@/components/form/AddProfileComponent';

const CreateProfile = async () => {
  await connectDB();
  const {id} = await currentUser();
  const profileData = await Profile.findOne({'clerkId': id});

  if(profileData){
    redirect("/");
  }

  return (
    <>
      <AddProfileComponent  />
    </>
  );

};

export default CreateProfile;
