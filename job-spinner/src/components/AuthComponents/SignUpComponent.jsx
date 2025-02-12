import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setData, toggleLogged } from "../../features/slices";

export default function SignUpComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = function (e) {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    dispatch(setData({ firstName, lastName, email, password }));
    dispatch(toggleLogged(true));
    navigate("/");
  };

  return (
    <div className="w-full flex justify-between h-screen">
      <form
        onSubmit={handleSubmitForm}
        className="w-[90%] md:w-[80%] xl:w-[80%] 2xl:w-[50%] mx-auto h-full flex justify-center items-center "
      >
        <div className="w-95% md:w-[90%] lg:w-[70%] mx-auto flex flex-col items-start gap-5">
          <Link to={"/"}>
            <img src="/Logo.png" alt="logo" className="w-20 lg:w-24" />
          </Link>

          <h3 className="text-base font-extrabold tracking-[1px] lg:text-xl 2xl:text-2xl text-gray-800">
            Create your Account
          </h3>

          <div className="w-full flex flex-col gap-3">
            <div className="w-full h-12 relative">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="size-full outline-none border-[1px] border-gray-700/[.4] rounded-lg px-10 text-gray-600"
              />

              <User className="size-6 absolute top-[50%] -translate-y-[50%] text-gray-400 left-2" />
            </div>

            <div className="w-full h-12 relative">
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name Name"
                className="size-full outline-none border-[1px] border-gray-700/[.4] rounded-lg px-10 text-gray-600"
              />

              <User className="size-6 absolute top-[50%] -translate-y-[50%] text-gray-400 left-2" />
            </div>

            <div className="w-full h-12 relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                className="size-full outline-none border-[1px] border-gray-700/[.4] rounded-lg px-10 text-gray-600"
              />

              <Mail className="size-6 absolute top-[50%] -translate-y-[50%] text-gray-400 left-2" />
            </div>

            <div className="w-full h-12 relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Password"
                className="size-full outline-none border-[1px] border-gray-700/[.4] rounded-lg px-10 text-gray-600"
              />

              <Lock className="size-6 absolute top-[50%] -translate-y-[50%] text-gray-400 left-2" />
            </div>

            <div className="w-full h-12 relative">
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm Password"
                className="size-full outline-none border-[1px] border-gray-700/[.4] rounded-lg px-10 text-gray-600"
              />

              <Lock className="size-6 absolute top-[50%] -translate-y-[50%] text-gray-400 left-2" />
            </div>
          </div>

          <button
            type="submit"
            className="font-bold text-base lg:text-xl tracking-[1px] text-white bg-[#0034D1] hover:bg-[#0034D1]/[.8] w-full py-4 cursor-pointer"
          >
            Create Account
          </button>
          <div className="w-full relative flex items-center justify-center">
            <p className="text-base lg:text-2xl font-bold uppercase tracking-[1px] text-gray-950">
              Or
            </p>
          </div>

          <div className="w-full flex items-center justify-between">
            <Link to="https://www.google.com">
              <img src="/google.png" className="size-8 lg:size-10" />
            </Link>

            <Link to="https://www.apple.com">
              <img src="/apple.png" className="size-8 lg:size-10" />
            </Link>

            <Link to="https://www.facebook.com">
              <img src="/facebook.png" className="size-8 lg:size-10" />
            </Link>

            <Link to="https://www.linkedin.com">
              <img src="/linkedin.png" className="size-8 lg:size-10" />
            </Link>
          </div>

          <div className="w-full flex items-center gap-4">
            <p className="text-base font-bold lg:font-extrabold tracking-[1px] text-gray-950">
              Already Have An Account ?
            </p>

            <Link
              to="/sign-in"
              className="text-[#0034D1] text-base font-bold tracking-[1px]"
            >
              Sign In
            </Link>
          </div>
        </div>
      </form>
      <div className="hidden 2xl:w-[50%] 2xl:flex items-center justify-center h-full">
        <img src="/team.png" alt="team work" />
      </div>
    </div>
  );
}
