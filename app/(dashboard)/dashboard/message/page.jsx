import connectDB from "./../../../../configs/database";
import ApplyJob from "@/models/applyJob";
import Profile from "@/models/profile";
import { currentUser } from "@clerk/nextjs/server";

const MessagePage = async () => {
  await connectDB();

  const user = await currentUser();
  if (!user || !user.id) {
    return <div>Silakan login terlebih dahulu.</div>;
  }

  const { id } = user;
  const profileDoc = await Profile.findOne({ clerkId: id }).select("_id");

  if (!profileDoc) {
    return (
      <div>
        Profil tidak ditemukan. Pastikan akun Anda memiliki profil yang sesuai.
      </div>
    );
  }

  const listJobUser = await ApplyJob.find({
    profile: profileDoc._id,
  })
    .populate("ListJobs")
    .lean();

  if (!listJobUser || listJobUser.length === 0) {
    return <div>Belum ada pekerjaan yang dilamar.</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-info">
        List Message Apply Jobs
      </h1>
      {listJobUser.map((item) => (
        <div key={item._id} className="card shadow-xl bg-info my-3">
          <div className="chat chat-start">
            <div className="chat-header">
              <span className="font-bold text-2xl mr-3">
                {item.ListJobs.title}
              </span>
              {item.status === "Interview" ? (
                <div className="badge badge-primary">Interview</div>
              ) : item.status === "Pending" ? (
                <div className="badge badge-warning">Pending</div>
              ) : item.status === "rejected" ? (
                <div className="badge badge-danger">Declined</div>
              ) : null}
            </div>
            <div className="chat-bubble mt-3 whitespace-pre-line bg-white text-black">
              {item.message ? item.message : "Belum ada pesan"}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessagePage;
