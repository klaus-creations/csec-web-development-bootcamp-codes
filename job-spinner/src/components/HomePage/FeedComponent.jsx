import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJobs, removeJobs } from "../../features/slices";
import { useGetJobsQuery } from "../../features/api";
import Job from "../commonComponents/Job";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Loading from "../commonComponents/Loading";
import NoResult from "../commonComponents/NoResult";

export default function FeedComponent() {
  const value = useSelector((state) => state.slice.searchValue);
  const dispatch = useDispatch();
  const savedIds = useSelector((state) => state.slice.savedJobIds);
  const loggedin = useSelector((state) => state.slice.auth);

  const [page, setPage] = useState(1);
  const limit = 10;

  const {
    data,
    isFetching: loading,
    error,
  } = useGetJobsQuery({
    page,
    limit,
    search: value,
  });

  const jobs = data?.jobs || [];

  const handleClick = (increase) => {
    if (increase) {
      setPage(page + 1);
    } else if (page > 1) {
      setPage(page - 1);
    }
  };

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
    return <Loading text="Loading..." />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full lg:w-[55%] 2xl:w-[50%] h-full flex flex-col items-center justify-start overflow-y-auto py-7 relative">
      <div className="w-full h-[80%] flex flex-col gap-4 items-center overflow-y-auto">
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
              small={false}
            />
          ))
        ) : (
          <NoResult />
        )}
      </div>

      <div className="w-[90%] flex items-center justify-between h-[10%]">
        <button
          onClick={() => handleClick(false)}
          className="text-xl font-bold tracking-[1px] bg-sky-700 cursor-pointer rounded-xl text-white p-1"
        >
          <ArrowLeft className="size-6" />
        </button>

        <p className="text-base tracking-[1px] text-gray-800">Page {page}</p>

        <button
          onClick={() => handleClick(true)}
          className="text-xl font-bold tracking-[1px] bg-sky-700 cursor-pointer rounded-xl text-white p-1"
        >
          <ArrowRight className="size-6" />
        </button>
      </div>
    </div>
  );
}
