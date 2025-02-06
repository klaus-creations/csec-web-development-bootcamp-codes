import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactUsPage from "./pages/ContactUsPage";
import LayoutPage from "./pages/LayoutPage";
import SiginIn from "./pages/SiginInPage";
import SignUpPage from "./pages/SiginUpPage";

const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/contact", element: <ContactUsPage /> },
    ],
  },
  {
    path: "/sign-in",
    element: <SiginIn />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
