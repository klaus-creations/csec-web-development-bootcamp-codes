import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/commonComponents/HeaderComponent";
import FooterComponent from "../components/commonComponents/FooterComponent";

export default function LayoutPage() {
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center">
      <div className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] overflow-y-hidden mx-auto">
        <section className="w-full h-[6vh]">
          <HeaderComponent />
        </section>

        <section className="w-full h-[94vh] overflow-y-auto">
          <Outlet />
          <FooterComponent />
        </section>
      </div>
    </div>
  );
}
