import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
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

      <div className="w-[60%] lg:w-[20%] 2xl:w-[15%] flex items-center justify-between">
        <Link
          to={"/sign-in"}
          className="text-white bg-[#0034D1] text-base px-4 lg:py-px-8 py-1 lg:py-2 rounded-2xl font-bold"
        >
          Login
        </Link>
        <Link
          to={"/sign-in"}
          className="border-[1px] border-[#0034D1] text-base px-4 lg:py-px-8 py-1 lg:py-2 text-[#0034D1] rounded-2xl font-bold"
        >
          Sign Up
        </Link>

        <button className="lg:hidden">
          <Menu className="size-8 text-gray-700" />
        </button>
      </div>
    </header>
  );
}
