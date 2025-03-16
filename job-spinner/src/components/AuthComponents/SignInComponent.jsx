import { Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signinValidation } from "../../validations/authValidation";
import { useLoginUserMutation } from "../../features/api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../features/slices";

export default function SignInComponent() {
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [data, setData] = useState(null);

  const signInData = useSelector((state) => state.slice.signInData);
  const dispatch = useDispatch();
  const {
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: signInData,
    onSubmit: async (values) => {
      try {
        const response = await loginUser(values);
        setData(response);
        resetForm();
        if (response?.data) {
          const userData = response.data.data;
          localStorage.setItem("token", userData?.token);
          dispatch(
            setUserData({
              token: userData?.token,
              name: userData?.user.name,
            })
          );
          navigate("/");
        }
      } catch (error) {
        console.log("Hello from catch");
        console.log(error.message || error);
      }
    },
    validationSchema: signinValidation,
    enableReinitialize: true,
  });

  return (
    <div className="w-full flex justify-between h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[80%] xl:w-[80%] 2xl:w-[50%] mx-auto h-full flex justify-center items-center "
      >
        <div className="w-95% md:w-[90%] lg:w-[70%] mx-auto flex flex-col items-start gap-5">
          <Link to={"/"}>
            <img src="/Logo.png" alt="logo" className="w-20 lg:w-24" />
          </Link>

          <h3 className="text-base font-extrabold tracking-[1px] lg:text-xl 2xl:text-2xl text-gray-800">
            Sign In to your Account
          </h3>

          <div className="w-full flex flex-col gap-3">
            <div className="w-full min-h-12 relative flex flex-col gap-1">
              <div className="w-full h-12 relative">
                <input
                  name="email"
                  value={values["email"]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  placeholder="Email Address"
                  className="size-full outline-none border-[1px] border-gray-700/[.4] rounded-lg px-10 text-gray-600"
                />

                <Mail className="size-6 absolute top-[50%] -translate-y-[50%] text-gray-400 left-2" />
              </div>
              {errors["email"] && touched["email"] && (
                <p className="text-red-500 text-xs mt-1">{errors["email"]}</p>
              )}
            </div>

            <div className="w-full min-h-12 relative flex flex-col gap-1">
              <div className="w-full h-12 relative">
                <input
                  name="password"
                  value={values["password"]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  placeholder="Password"
                  className="size-full outline-none border-[1px] border-gray-700/[.4] rounded-lg px-10 text-gray-600"
                />

                <Lock className="size-6 absolute top-[50%] -translate-y-[50%] text-gray-400 left-2" />
              </div>
              {errors["password"] && touched["password"] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors["password"]}
                </p>
              )}
            </div>

            {data?.error && (
              <p className="text-red-500 text-xs mt-1">
                {data?.error.data.error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="font-bold text-base lg:text-xl tracking-[1px] text-white bg-[#0034D1] hover:bg-[#0034D1]/[.8] w-full py-4 cursor-pointer relative"
          >
            {isLoading ? (
              <span className="flex items-center gap-1 justify-center">
                Loading...
                <img
                  src="/spinner.svg"
                  alt="loading spinner"
                  className="size-5 text-white"
                />
              </span>
            ) : (
              <span>Sign In</span>
            )}
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
              Don&apos;t Have An Account?
            </p>

            <Link
              to="/sign-up"
              className="text-[#0034D1] text-base font-bold tracking-[1px]"
            >
              Create Account
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
