import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
export default function Job({
  logo,
  title,
  company,
  description,
  type,
  salary,
  onHandleAddToSaveJobs,
  id,
}) {
  const job = {
    logo,
    title,
    company,
    description,
    type,
    salary,
    id,
  };
  const savedIds = useSelector((state) => state.slice.savedJobIds);
  return (
    <div className="w-[95%] flex items-start rounded-2xl cursor-pointer px-6 py-4 shadow-md shadow-gray-400 relative gap-4 border-[1px] border-gray-400/[.5]">
      <img className="size-6" alt="company logo" src={logo} />
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-gray-700 text-2xl lg:text-3xl tracking-[1px]">
          {title}
        </h2>
        <p className="text-gray-500 text-base lg:text-xl tracking-[1px]">
          {company}
        </p>
        <div className="flex items-center gap-3">
          <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm lg:text-base font-thin">
            {type}
          </span>
          <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm lg:text-base font-thin">
            {salary}
          </span>
        </div>

        <p className="text-xs lg:text-sm text-gray-500 tracking-[1px]">
          {description}
        </p>
      </div>

      <div className="absolute top-4 right-4 flex gap-4 items-center">
        <button
          className="text-gray-800 cursor-pointer"
          onClick={() => onHandleAddToSaveJobs(job)}
        >
          {savedIds.includes(id) ? (
            <BookmarkCheck className="size-6 text-gray-950" />
          ) : (
            <Bookmark className="size-6" />
          )}

          {/*  */}
        </button>
        <button className="text-gray-800 cursor-pointer">
          <Share2 className="size-6" />
        </button>
      </div>
    </div>
  );
}
