import connectDB from "@/configs/database";
import ApplyJob from "@/models/applyJob";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { MdSchool } from "react-icons/md";
import DialogButton from "./../../../../../../components/DialogButton";

const ListPelamarPage = async ({ params }) => {
  await connectDB();
  const applyJobs = await ApplyJob.find({
    jobs: params.id,
    status: "Pending",
  })
    .populate("ListPelamar")
    .lean();

  const applyJobsRaw = JSON.parse(JSON.stringify(applyJobs));

  if (applyJobsRaw.length <= 0) {
    return (
      <h1 className="text-center text-info">
        Belum ada data pelamar yang mendaftar pada job ini.
      </h1>
    );
  }

  return (
    <>
      <h1 className="text-center my-5 font-bold text-3xl text-info underline">
        List Pelamar
      </h1>
      <div className="grid lg:gird-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {applyJobsRaw.map((item) => (
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title text-lg font-bold text-info">
                {item.ListPelamar.firstName} {item.ListPelamar.lastName}
              </h2>
              <p className="whitespace-pre-line my-3">
                {item.ListPelamar.biodata.substring(0, 200)} ...
              </p>
              <div className="flex justify-between ">
                <div className="flex">
                  <Link href={item.ListPelamar.linkedin} target="#">
                    {" "}
                    <CiLinkedin className="w-9 h-9 text-blue-400" />
                  </Link>
                  <Link href={item.ListPelamar.portfolio} target="#">
                    <MdSchool className="w-9 h-9 text-success" />
                  </Link>
                </div>
                <DialogButton data={item.ListPelamar}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPelamarPage;
