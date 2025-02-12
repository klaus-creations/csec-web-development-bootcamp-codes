import { useSelector } from "react-redux";
import SavedJob from "./SavedJob";

export default function SavedComponent() {
  const jobs = useSelector((state) => state.slice.savedJobs);
  const loggedin = useSelector((state) => state.slice.auth);
  return (
    <>
      {loggedin ? (
        <div className="hidden lg:flex flex-col items-center gap-4 lg:w-[16%] 2xl:w-[20%] h-[50%] border-[1px] border-gray-500/[.5] rounded-xl p-3">
          <h2 className="text-base lg:text-xl font-bold tracking-[1px] text-gray-800 h-[10%]">
            Saved Jobs
          </h2>
          <div className="w-full h-[90%] flex flex-col items-center gap-3 overflow-y-auto">
            {jobs.length === 0 ? (
              <p className="text-gray-500 text-base tracking-[1px]">
                No saved jobs yet.
              </p>
            ) : (
              <>
                {jobs.map((job) => (
                  <SavedJob {...job} key={job.id} />
                ))}
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex items-center justify-center  gap-4 lg:w-[16%] 2xl:w-[20%] h-[50%] border-[1px] border-gray-500/[.5] rounded-xl p-3">
          Please Sign up or login to save jobs
        </div>
      )}
    </>
  );
}
