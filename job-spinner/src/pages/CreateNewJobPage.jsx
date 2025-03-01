import { useSelector } from "react-redux";
import FirstInputs from "../components/NewJobComponents/FirstInputs";
import SecondInputs from "../components/NewJobComponents/SecondInputs";

export default function CreateNewJobPage() {
  const jobPage = useSelector((state) => state.slice.newJobPage);
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[70%] mx-auto flex flex-col gap-4 items-center bg-gradient-to-r from-teal-500/[.05] to-orange-500/[.05] py-20 mt-10">
      <h3 className="text-xl lg:text-2xl font-bold tracking-[1px] text-blue-700 uppercase">
        Post A New Job
      </h3>
      {jobPage === 1 ? <FirstInputs /> : <SecondInputs />}

      {/* {jobPage === 1 ? (
        <button className="text-base lg:text-xl font-bold tracking-[1px] bg-blue-800 text-white px-3 py-1 rounded-lg cursor-pointer">
          Continue
        </button>
      ) : (
        <button className="text-base lg:text-xl font-bold tracking-[1px] bg-blue-800 text-white px-3 py-1 rounded-lg cursor-pointer">
          Post Job
        </button>
      )} */}
    </div>
  );
}
