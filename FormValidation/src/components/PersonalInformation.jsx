import InputField from "./InputField";

export default function PersonalInformation() {
  return (
    <div className="w-[90%] md:w-[80%] xl:w-[70%] lg:w-[60%]  flex flex-col items-center gap-5">
      <h2 className="text-base sm:text-xl md:text-2xl font-bold tracking-[1px] self-start text-gray-800">
        Personal Information
      </h2>
      <InputField
        name="firstName"
        type="text"
        lab="Last Name"
        placeholder="Enter last Name"
      />
      <InputField
        name="lastName"
        type="text"
        lab="Last Name"
        placeholder="Enter your date of birth"
      />
      <InputField
        name="email"
        type="text"
        lab="Email Address"
        placeholder="Enter your Email"
      />

      <InputField
        name="phoneNumber"
        type="text"
        lab="Phone Number"
        placeholder="Enter your Phone Number"
      />

      <button
        type="submit"
        className="text-base lg:text-xl uppercase bg-sky-700 rounded-lg px-4 py-2 lg:px-5 lg:py-3 font-extrabold tracking-[1px] text-white"
      >
        Continue
      </button>

      <div className="w-full flex items-center justify-between">
        <button className="text-xs lg:text-base font-bold tracking-[1px] border-[1px] border-sky-700 rounded-lg text-gray-800 px-3 py-1 lg:px-5 lg:py-2">
          Back to Previous
        </button>
        <button className="text-xs lg:text-base font-bold tracking-[1px] border-[1px] border-sky-700 rounded-lg text-gray-800 px-3 py-1 lg:px-5 lg:py-2">
          Clear Form
        </button>
      </div>
    </div>
  );
}
