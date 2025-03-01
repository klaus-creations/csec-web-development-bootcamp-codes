import PersonalInformation from "./components/PersonalInformation";

export default function App() {
  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[40%] mx-auto flex flex-col gap-4 lg:gap-7 items-center mt-10 border-[1px] border-gray-700/[.5] shadow-lg shadow-sky-700/[.5] py-10  bg-gradient-to-r from-sky-500/[.1] to-indigo-500/[.1] lg:py-20 rounded-lg">
      <h1
        className="text-base sm:text-xl md:text-2xl 2xl:text-3xl font-extrabold tracking-[1px] bg-gradient-to-r from-sky-500
       to-indigo-500 text-transparent bg-clip-text"
      >
        CSEC-ASTU REGISTRATION FORM
      </h1>

      <div className="w-full flex flex-col items-center gap-4">
        <PersonalInformation />
      </div>
    </div>
  );
}
