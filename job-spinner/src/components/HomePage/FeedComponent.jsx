import { useEffect, useState } from "react";
import { getJobs } from "../../services/requests";
import Job from "./Job";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Loading from "../commonComponents/Loading";
import NoResult from "../commonComponents/NoResult";
import { useDispatch, useSelector } from "react-redux";
import { addJobs, removeJobs } from "../../features/slices";
import { useGetJobsQuery } from "../../features/api";

export default function FeedComponent() {
  const value = useSelector((state) => state.slice.searchValue);
  const dispatch = useDispatch();
  const savedIds = useSelector((state) => state.slice.savedJobIds);
  const loggedin = useSelector((state) => state.slice.auth);

  const [jobs, setJobs] = useState([]);
  const [limit, setLimit] = useState(1);
  const [loading, setLoading] = useState(false);
  const [temp, setTemp] = useState([]);
  const res = useGetJobsQuery(limit, 10, value);
  setTemp(res);
  useEffect(() => {
    async function getFeedJobs() {
      try {
        setLoading(true);
        const response = await getJobs(limit, 10, value);
        setJobs(response?.jobs || []);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        return [];
      } finally {
        setLoading(false);
      }
    }
    getFeedJobs();
  }, [limit, value]);

  const handleCLick = function (add) {
    if (add) {
      setLimit(limit + 1);
    } else if (limit > 1) {
      setLimit(limit - 1);
    }
  };

  const addToSaveJobs = function (el) {
    if (!loggedin) {
      alert("Please login to save jobs");
    } else if (!savedIds.includes(el.id)) {
      dispatch(addJobs(el));
    } else {
      dispatch(removeJobs(el.id));
    }
  };

  return (
    <div className="w-full lg:w-[55%] 2xl:w-[50%] h-full flex flex-col items-center justify-start overflow-y-auto py-7 relative">
      <div className="w-full h-[80%] flex flex-col gap-4 items-center overflow-y-auto">
        {loading ? (
          <Loading text={"Loading"} />
        ) : jobs.length > 0 ? (
          <>
            {jobs.map(function (job) {
              return (
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
                />
              );
            })}
          </>
        ) : (
          <NoResult />
        )}
      </div>

      <div className="w-[90%] flex items-center justify-between h-[10%] ">
        <button
          onClick={() => handleCLick(false)}
          className="text-xl font-bold tracking-[1px] bg-sky-700 cursor-pointer rounded-xl text-white p-1"
        >
          <ArrowLeft className="size-6" />
        </button>

        <p className="text-base tracking-[1px] text-gray-800">Page {limit}</p>
        <button
          onClick={() => handleCLick(true)}
          className="text-xl font-bold tracking-[1px] bg-sky-700 cursor-pointer rounded-xl text-white p-1"
        >
          <ArrowRight className="size-6" />
        </button>
      </div>
    </div>
  );
}

/* {
      
        loading ? <Loading /> : <> { }

    
        
         
      </>
      } */
