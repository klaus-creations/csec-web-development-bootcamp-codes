export default function FilterComponent() {
  return (
    <div className="hidden lg:flex flex-col items-center p-4 lg:w-[16%] 2xl:w-[20%]">
      <h2 className="text-xl lg:text-2xl font-bold tracking-[1px]">Filter </h2>
      <div className="w-full flex flex-col items-start">
        <h4 className="font-[400] text-gray-700 text-base tracking-[1px] mb-2">
          Date Posted
        </h4>

        <select className="w-full text-gray-400  px-2 py-1 rounded-lg outline-none border-[1px] border-gray-500/[.5] mb-4">
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="last-7-days">Last 7 Days</option>
          <option value="last-30-days">Last 30 Days</option>
        </select>

        {/* NOTE */}
        <h4 className="font-[400] text-gray-700 text-base tracking-[1px] mb-2">
          Job Type
        </h4>
        <div className="flex items-center gap-1 mb-1">
          <input type="checkbox" className="size-3" />
          <label className="text-xs lg:text-sm tracking-[1px]  text-gray-400">
            Full Time
          </label>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <input type="checkbox" className="size-3" />
          <label className="text-xs lg:text-sm tracking-[1px]  text-gray-400">
            part Time
          </label>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <input type="checkbox" className="size-3" />
          <label className="text-xs lg:text-sm tracking-[1px]  text-gray-400">
            Internship
          </label>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <input type="checkbox" className="size-3" />
          <label className="text-xs lg:text-sm tracking-[1px]  text-gray-400">
            Contact
          </label>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <input type="checkbox" className="size-3" />
          <label className="text-xs lg:text-sm tracking-[1px]  text-gray-400">
            Volunteer
          </label>
        </div>

        {/* FOURTH */}
        <h4 className="font-[400] text-gray-700 text-base tracking-[1px] mb-2">
          Experiance level
        </h4>

        <select className="w-full text-gray-400  px-2 py-1 rounded-lg outline-none border-[1px] border-gray-500/[.5] mb-4">
          <option value="all">Beginner</option>
          <option value="today">Intermediate</option>
          <option value="yesterday">Advamced</option>
          <option value="last-7-days">Expert</option>
        </select>

        {/* FIFTH */}
        <h4 className="font-[400] text-gray-700 text-base tracking-[1px] mb-2">
          Currencyw
        </h4>

        <select className="w-full text-gray-400  px-2 py-1 rounded-lg outline-none border-[1px] border-gray-500/[.5] mb-4">
          <option value="all">Dollar</option>
          <option value="today">Pound</option>
          <option value="yesterday">Birr</option>
          <option value="last-7-days">Derham</option>
        </select>
      </div>
    </div>
  );
}
