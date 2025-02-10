/* eslint-disable react/prop-types */
export default function Loading({ text }) {
  return (
    <div className="flex items-center text-base font-bold tracking-[1px] text-gray-700 gap-4">
      <span className="ml-2 text-xl font-bold tracking-[1px] ">{text}</span>
      <img src="/spinner.svg" className="size-8" />
    </div>
  );
}
