import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchValue } from "../../features/slices";
import { useParams } from "react-router-dom";

export default function SearchComponent() {
  const value = useSelector((state) => state.slice.searchValue);
  const dispatch = useDispatch();
  const handleSearch = function (e) {
    e.preventDefault();
    dispatch(changeSearchValue(e.target.value));
  };

  return (
    <form className="w-full lg:w-[55%] 2xl:w-[50%] mx-auto rounded-full h-10 relative shadow-sm shadow-gray-700/[.7]">
      <input
        type="text"
        value={value}
        onChange={(e) => handleSearch(e)}
        className="w-full height h-full text-gray-500 text-xs tracking-[1px] outline-none border-[1px] border-gray-400/[.5]
         rounded-2xl px-8"
        placeholder="Job title, Keywords, or Company name | Location"
      />
      <Search className="size-4 absolute top-[50%] -translate-y-[50%] text-gray-800 left-3" />
      <button
        className="bg-[#0034D1] text-white font-bold text-base px-3 py-1 absolute top-[50%] -translate-y-[50%] right-2 
      rounded-lg cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
