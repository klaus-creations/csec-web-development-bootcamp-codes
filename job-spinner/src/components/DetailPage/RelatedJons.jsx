import { useDispatch, useSelector } from "react-redux";
import { useGetJobsQuery } from "../../features/api";
import Loading from "../commonComponents/Loading";
import Job from "../commonComponents/Job";
import { addJobs, removeJobs } from "../../features/slices";
import NoResult from "../commonComponents/NoResult";

export default function RelatedJobsComponent() {
  const value = useSelector((state) => state.slice.searchValue);
  const dispatch = useDispatch();
  const savedIds = useSelector((state) => state.slice.savedJobIds);
  const loggedin = useSelector((state) => state.slice.auth);

  const limit = 10;

  const {
    data,
    isFetching: loading,
    error,
  } = useGetJobsQuery({
    page: 1,
    limit,
    search: value,
  });

  const jobs = data?.jobs || [];

  const addToSaveJobs = (job) => {
    if (!loggedin) {
      alert("Please login to save jobs");
    } else if (!savedIds.includes(job.id)) {
      dispatch(addJobs(job));
    } else {
      dispatch(removeJobs(job.id));
    }
  };

  if (loading) {
    return (
      <div className="hidden  lg:flex flex-col items-center gap-4 lg:w-[35%] 2xl:w-[25%] h-[50%] border-[1px] border-gray-500/[.5] rounded-xl p-3">
        <Loading text="Loading..." />;
      </div>
    );
  }

  if (error) {
    return (
      <div className="hidden lg:flex flex-col items-center gap-4 lg:w-[35%] 2xl:w-[25%] h-[50%] border-[1px] border-gray-500/[.5] rounded-xl p-3">
        <div>Error: {error.message}</div>;
      </div>
    );
  }
  return (
    <div className="hidden lg:flex flex-col items-center gap-4 lg:w-[35%] 2xl:w-[25%] h-[50%] border-[1px] border-gray-500/[.5] rounded-xl p-3 overflow-y-auto">
      <h2 className="text-xl lg:text-2xl font-bold tracking-[1px]">
        Related Jobs
      </h2>
      <div className="h-[85%] flex flex-col items-center gap-2 overflow-y-auto">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Job
              key={job.id}
              title={job.title}
              logo={job.logo}
              company={job.company}
              description={job.description}
              type={job.type}
              salary={job.salary}
              id={job.id}
              onHandleAddToSaveJobs={addToSaveJobs}
              small={true}
            />
          ))
        ) : (
          <NoResult />
        )}
      </div>
    </div>
  );
}
