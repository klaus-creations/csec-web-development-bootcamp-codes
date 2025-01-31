/* eslint-disable react/prop-types */
export default function UserValue({ usersData }) {
  return (
    <div className="w-[90%] md:w-[80%] flex flex-wrap gap-y-6 justify-between">
      {usersData.length === 0 ? (
        <p className="text-gray-400 font-bold tracking-[1px] mx-auto mt-6 md:mt-10 2xl:mt-12 text-xl lg:text-2xl">
          You Have No Thoughts yet
        </p>
      ) : (
        usersData.map((el, index) => (
          <div
            key={index}
            style={{ backgroundColor: el.color }}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] 2xl:w-[19%] flex flex-col items-start px-4 py-6"
          >
            <h3 className="text-base font-bold tracking-[1px] text-white">
              {el.name}
            </h3>
            <p className="text-sm font-semibold tracking-[1px] text-gray-500">
              {el.thoughts}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
