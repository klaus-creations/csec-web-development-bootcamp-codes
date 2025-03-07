import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../commonComponents/Loading";
import { Bookmark, Share2 } from "lucide-react";
import { useGetJobDetailQuery } from "../../features/api";
import { useSelector } from "react-redux";
export default function DetailComponent() {
  const id = useLocation()?.pathname.split("/")[2];
  const { data: detail, error, isFetching: loading } = useGetJobDetailQuery(id);
  const navigate = useNavigate();

  const value = useSelector((state) => state.slice.searchValue);
  if (value) {
    navigate("/");
  }

  const jobDetail = detail?.data;
  return (
    <>
      {error ? (
        <div> </div>
      ) : (
        <div className="w-full h-full flex justify-center">
          {loading ? (
            <Loading text={"Loading..."} />
          ) : (
            <div className="w-full self-start md:w-[85%] lg:w-[75%] 2xl:[65%] h-full flex flex-col gap-4 items-start py-5">
              {/* 
              // NOTE: THE UPPER PART
               */}
              <div className="w-full  flex justify-between items-center gap-4 px-5 py-3">
                <div className="flex items-center gap-8">
                  <img className="w-16" src={jobDetail.logo} alt="logo" />
                  <div className="flex flex-col items-start gap-1">
                    <h2 className="text-xl lg:text-2xl text-gray-800 font-bold tracking-[1px]">
                      {jobDetail.title}
                    </h2>

                    <span className="text-base lg:text-xl font-bold tracking-[1px] text-gray-800">
                      {jobDetail?.company}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-5 items-end">
                  <div className="flex gap-4 items-center">
                    <button className="text-gray-800 cursor-pointer">
                      <Bookmark className="size-6" />
                    </button>
                    <button className="text-gray-800 cursor-pointer">
                      <Share2 className="size-6" />
                    </button>
                  </div>

                  <button
                    className="text-base lg:text-xl font-extrabold tracking-[1px] bg-[#0034D1] px-3 py-1 text-gray-100 
                  rounded-lg cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              {/* 
              // NOTE: THE BOTTOM PART
               */}
              <div className="w-full flex gap-10 px-5 py-3">
                {/* LEFT SIDE OF THE DETAIL PAGE */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-base lg:text-xl font-bold text-gray-900">
                      Job Type :
                    </span>
                    <span className="text-xs lg:text-base  text-gray-600">
                      {jobDetail.type || "Full Time"}
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <span className="text-base lg:text-xl font-bold text-gray-900">
                      Location:
                    </span>
                    <span className="text-xs lg:text-base  text-gray-600">
                      {jobDetail?.location || "london"}
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <span className="text-base lg:text-xl font-bold text-gray-900">
                      Experience:
                    </span>
                    <span className="text-xs lg:text-base  text-gray-600">
                      {jobDetail?.experienceLevel || "Entr Level"}
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <span className="text-base lg:text-xl font-bold text-gray-900">
                      Number of Applicants:
                    </span>
                    <span className="text-xs lg:text-base  text-gray-600">
                      40
                    </span>
                  </div>
                </div>

                {/* LEFT SIDE OF THE DETAIL PAGE */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-xl lg:text-2xl font-bold text-gray-900">
                      Description
                    </span>
                    <span className="text-base lg:text-xl  text-gray-800">
                      {detail?.description || "No Description"}
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <span className="text-xl lg:text-2xl font-bold text-gray-900">
                      Key Responsibility
                    </span>
                    <ul className="flex flex-col items-start gap-2 text-base lg:text-xl text-gray-800">
                      <li className="list-disc ml-5">
                        Create and Build User-Focused Interfaces for Web and
                        Mobile Apps.
                      </li>

                      <li className="list-disc ml-5">
                        Design and Implement Intuitive Interfaces for Web and
                        Mobile Platforms.
                      </li>

                      <li className="list-disc ml-5">
                        Craft User-Centric Web and Mobile Application
                        Interfaces.
                      </li>

                      <li className="list-disc ml-5">
                        Develop and Optimize User-Friendly Interfaces for Web
                        and Mobile.
                      </li>

                      <li className="list-disc ml-5">
                        Design and Create Engaging User Interfaces for Both Web
                        and Mobile.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
