import { useState } from "react";
import FeedComponent from "../components/HomePage/FeedComponent";
import FilterComponent from "../components/HomePage/FilterComponent";
import SavedComponent from "../components/HomePage/SavedComponent";
import SearchComponent from "../components/HomePage/SearchComponent";

export default function Homepage() {
  const [searchValue, setSearchValue] = useState("");
  const handelSearch = function (e) {
    setSearchValue(e.target.value);
  };
  return (
    <div className="w-full flex flex-col gap-5 pt-5">
      <div className="w-full">
        <SearchComponent value={searchValue} onHandleSearch={handelSearch} />
      </div>
      <div className="w-full h-[94vh] flex justify-between">
        <FilterComponent />
        <FeedComponent value={searchValue} />
        <SavedComponent />
      </div>
    </div>
  );
}
