import { useEffect, useState } from "react";
import { getJobs } from "../../services/requests";
import Job from "./Job";

export default function FeedComponent() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    async function getFeedJobs() {
      try {
        const response = await getJobs(1, 50);
        setJobs(response?.jobs || []);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        return [];
      }
    }
    getFeedJobs();
  }, []);
  return (
    <div className="w-full lg:w-[55%] 2xl:w-[50%] h-full flex flex-col items-center gap-4 overflow-y-auto py-7">
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
    </div>
  );
}
