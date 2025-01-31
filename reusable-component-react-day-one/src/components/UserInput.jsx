/* eslint-disable react/prop-types */
import { useState } from "react";

const colors = ["#4a044e", "#2e1065", "#172554", "#083344", "#450a0a"];

export default function UserInput({ onHandleUserInputs }) {
  const [name, setName] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [colorC, setColorC] = useState("#4a044e");

  return (
    <form
      className="w-[90%] md:w-[80%] flex flex-col gap-4 items-start"
      onSubmit={(e) => {
        e.preventDefault();
        onHandleUserInputs(name, thoughts, colorC);
        setName("");
        setThoughts("");
        setColorC("#4a044e");
      }}
    >
      <div className="w-full flex items-center gap-2 md:gap-5">
        <label className="text-base font-bold md:text-xl text-gray-400">
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-44 md:w-56 lg:w-62 2xl:w-72 px-4 py-2 outline-none bg-black/[.2] border-[1px] border-gray-400/[.6] text-gray-400"
          placeholder="Enter your Name"
        />
      </div>

      <div className="w-full flex items-center gap-2 md:gap-5">
        <label className="text-base font-bold md:text-xl text-gray-400">
          Your Thoughts
        </label>
        <textarea
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
          className="w-56 lg:w-62 2xl:w-96 h-44 resize-none px-4 py-2 outline-none bg-black/[.2] border-[1px] border-gray-400/[.6] text-gray-400"
          placeholder="Enter your Name"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-gray-400 font-bold tracking-[1px] text-base md:text-xl">
            Choose Color
          </span>
          {colors.map((color, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={() => setColorC(color)}
                style={{ backgroundColor: color }}
                className={`size-6 md:size-10 rounded-full cursor-pointer ${
                  color === colorC && "border-[1px] border-white"
                }`}
              ></button>
            );
          })}
        </div>
      </div>

      <button
        type="submit"
        className="text-sky-700 font-bold tracking-[1px] outline-none shadow-lg shadow-sky-700/[.5] px-4 py-2 border-[1px] border-gray-400/[.5] cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
