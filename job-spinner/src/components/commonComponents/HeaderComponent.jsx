import { Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleLogged } from "../../features/slices";

export default function HeaderComponent() {
  const logged = useSelector((state) => state.slice.data);
  const loggedin = useSelector((state) => state.slice.auth);
  const dispatch = useDispatch();

  return (
    <header className="w-full h-[6vh] flex items-center justify-between shadow-sm shadow-gray-700/[.5]">
      <Link to={"/"}>
        <img src="/Logo.png" alt="logo" className="w-20 lg:w-24" />
      </Link>

      <nav className="w-[40%] hidden lg:flex items-center justify-between">
        <Link className="text-base lg:text-[20x] text-gray-600" to={"/"}>
          Job Search
        </Link>
        <Link className="text-base lg:text-[20x] text-gray-600" to={"/"}>
          My Application
        </Link>
        <Link className="text-base lg:text-[20x] text-gray-600" to={"/"}>
          Companies
        </Link>
        <Link className="text-base lg:text-[20x] text-gray-600" to={"/"}>
          Contact Us
        </Link>
      </nav>

      {!loggedin ? (
        <div className="w-[60%] lg:w-[20%] 2xl:w-[15%] flex items-center justify-between">
          <Link
            to={"/sign-in"}
            className="text-white bg-[#0034D1] text-base px-4 lg:py-px-8 py-1 lg:py-2 rounded-2xl font-bold"
          >
            Login
          </Link>
          <Link
            to={"/sign-up"}
            className="border-[1px] border-[#0034D1] text-base px-4 lg:py-px-8 py-1 lg:py-2 text-[#0034D1] rounded-2xl font-bold"
          >
            Sign Up
          </Link>

          <button className="lg:hidden">
            <Menu className="size-8 text-gray-700" />
          </button>
        </div>
      ) : (
        <div className="w-[60%] lg:w-[20%] 2xl:w-[15%] flex items-center justify-between">
          <span className="text-base font-bold text-gray-800">
            {logged.firstName}
          </span>

          <button
            onClick={() => dispatch(toggleLogged(false))}
            className="border-[1px] border-[#0034D1] text-base px-4 lg:py-px-8 py-1 lg:py-2 text-[#0034D1] rounded-2xl font-bold cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
