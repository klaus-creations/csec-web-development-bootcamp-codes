import { useState } from "react";
import UserInput from "./components/UserInput";
import UserValue from "./components/UserValue";

function App() {
  const [userValues, setUservalues] = useState([]);

  const handleUserInputs = function (name, thoughts, color) {
    if (name && thoughts && color) {
      console.log("what is your name");
      setUservalues([...userValues, { name, thoughts, color }]);
      (name = ""), (thoughts = ""), (color = "");
      return;
    }
    return;
  };

  return (
    <div className="w-full min-h-[100vh] bg-gray-800 flex flex-col items-center gap-5 pt-5">
      <h1 className="text-xl sm:text-2xl font-bold lg:font-extrabold md:text-3xl 2xl:text-4xl tracking-[1px] text-sky-700">
        Learn Reuseable Components In react
      </h1>

      <UserInput onHandleUserInputs={handleUserInputs} />
      <UserValue usersData={userValues} />
    </div>
  );
}

export default App;
