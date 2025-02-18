import { useEffect, useState } from "react";
import { getJobDetail } from "../services/requests";
import { useLocation } from "react-router-dom";
import Loading from "../components/commonComponents/Loading";
import { Bookmark, Share2 } from "lucide-react";

export default function DetailPage() {
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const id = useLocation()?.pathname.split("/")[2];

  useEffect(
    function () {
      async function getDetail() {
        try {
          setLoading(true);
          const result = await getJobDetail(id);
          setDetail(result);
        } catch (error) {
          console.log(error);
          setError(true);
        } finally {
          setLoading(false);
        }
      }

      getDetail();
    },
    [id]
  );
  return (
    <div className="w-full h-full  flex flex-col items-center justify-center gap-4">
      {error ? (
        <div> </div>
      ) : (
        <>
          {loading ? (
            <Loading text={"Loading..."} />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-between py-5">
              <div className="w-full flex justify-between items-center gap-4 px-5 py-3">
                <div className="flex items-center gap-8">
                  <img className="w-16" src={detail.logo} alt="logo" />
                  <div className="flex flex-col items-start gap-1">
                    <h2 className="text-xl lg:text-2xl text-gray-800 font-bold tracking-[1px]">
                      {detail.title}
                    </h2>

                    <span className="text-base lg:text-xl font-bold tracking-[1px] text-gray-800">
                      {detail?.company}
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

                  <button className="text-base lg:text-xl font-extrabold tracking-[1px] bg-[#0034D1] px-3 py-1 text-gray-100 rounded-lg cursor-pointer">
                    Apply Now
                  </button>
                </div>
              </div>

              <div className="w-full flex gap-2"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
