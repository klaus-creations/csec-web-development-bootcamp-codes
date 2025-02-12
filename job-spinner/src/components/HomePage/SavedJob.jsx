import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeJobs } from "../../features/slices";

/* eslint-disable react/prop-types */
export default function SavedJob({
  title,
  company,
  description,
  type,
  salary,
  id,
}) {
  const dispatch = useDispatch();

  const removeSavedJob = function (job_id) {
    dispatch(removeJobs(job_id));
  };
  return (
    <div className="w-[95%] flex items-start rounded-2xl cursor-pointer px-2 py-4 shadow-md shadow-gray-400 relative gap-4 border-[1px] border-gray-400/[.5]">
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-gray-700 text-xs lg:text-base tracking-[1px] font-bold">
          {title}
        </h2>
        <p className="text-gray-500 text-xs lg:text-base  tracking-[1px]">
          {company}
        </p>
        <div className="flex items-center gap-3">
          <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm lg:text-xs font-thin">
            {type}
          </span>
          <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm lg:text-xs font-thin">
            {salary}
          </span>
        </div>

        <p className="text-xs lg:text-sm text-gray-500 tracking-[1px]">
          {description}
        </p>
      </div>

      <button
        onClick={() => removeSavedJob(id)}
        className="absolute top-2 right-2 text cursor-pointer "
      >
        <X className="size-5" />
      </button>
    </div>
  );
}
