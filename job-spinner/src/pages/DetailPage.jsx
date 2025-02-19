import DetailComponent from "../components/DetailPage/DetailComponent";
import RelatedJobsComponent from "../components/DetailPage/RelatedJons";

export default function DetailPage() {
  return (
    <div className="w-full h-full  flex  items-start justify-around pt-10 ">
      <DetailComponent />
      <RelatedJobsComponent />
    </div>
  );
}
