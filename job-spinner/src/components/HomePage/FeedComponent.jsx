/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getJobs } from "../../services/requests";
import Job from "./Job";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Loading from "../commonComponents/Loading";
import NoResult from "../commonComponents/NoResult";

export default function FeedComponent({ value }) {
  const [jobs, setJobs] = useState([]);
  const [limit, setLimit] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getFeedJobs() {
      try {
        setLoading(true);
        const response = await getJobs(limit, 4, value);
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

  return (
    <div className="w-full lg:w-[55%] 2xl:w-[50%] h-full flex flex-col items-center gap-4 overflow-y-auto py-7">
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
              />
            );
          })}

          <div className="w-full flex items-center justify-between">
            <button
              onClick={() => handleCLick(false)}
              className="text-xl font-bold tracking-[1px] text-sky-700 cursor-pointer"
            >
              <ArrowLeft className="size-8" />
            </button>

            <button
              onClick={() => handleCLick(true)}
              className="text-xl font-bold tracking-[1px] text-sky-700 cursor-pointer"
            >
              <ArrowRight className="size-6" />
            </button>
          </div>
        </>
      ) : (
        <NoResult />
      )}
    </div>
  );
}

/* {
      
        loading ? <Loading /> : <> { }

        
      </>
      } */
