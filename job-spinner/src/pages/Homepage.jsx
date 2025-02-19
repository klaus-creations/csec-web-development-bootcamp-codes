import FeedComponent from "../components/HomePage/FeedComponent";
import FilterComponent from "../components/HomePage/FilterComponent";
import SavedComponent from "../components/HomePage/SavedComponent";

export default function Homepage() {
  return (
    <div className="w-full flex flex-col gap-5 pt-5">
      <div className="w-full h-[94vh] flex justify-between">
        <FilterComponent />
        <FeedComponent />
        <SavedComponent />
      </div>
    </div>
  );
}
