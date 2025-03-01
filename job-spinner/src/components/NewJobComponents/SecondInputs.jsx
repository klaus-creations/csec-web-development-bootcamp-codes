import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { secondInputValidation } from "../../validations/newjobvalidation";
import InputField from "./InputField";
import { setJobData2 } from "../../features/slices";
import { useNavigate } from "react-router-dom";
import { usePostJobMutation } from "../../features/api";

export default function SecondInputs() {
  const dispatch = useDispatch();
  const jobData = useSelector((state) => state.slice.jobData2);
  const jobData1 = useSelector((state) => state.slice.jobData1);
  const navigate = useNavigate();
  const [postJob, { isLoading }] = usePostJobMutation();

  const formik = useFormik({
    initialValues: jobData || {},
    onSubmit: async (values) => {
      dispatch(setJobData2(values));
      let totalJob = {
        ...jobData1,
        ...values,
      };

      try {
        const submitData = {
          ...totalJob,
          salary: Number(totalJob.salary),
        };
        console.log(submitData);
        await postJob(submitData).unwrap();

        navigate("/");
      } catch (error) {
        console.log(error.message || error);
      }
    },
    validationSchema: secondInputValidation,
    enableReinitialize: true,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[40%] flex flex-col items-start gap-4"
    >
      <InputField
        formik={formik}
        name="salary"
        type="text"
        lab="Job Salary"
        placeholder="Enter Job Salary"
      />
      <InputField
        formik={formik}
        name="location"
        type="text"
        lab="location"
        placeholder={"Enter location"}
      />
      <InputField
        formik={formik}
        name="logo"
        logo="file"
        lab="Job logo"
        placeholder={"Enter Job logo"}
      />
      <InputField
        formik={formik}
        name="experienceLevel"
        type="select"
        lab="Experience Level"
        placeholder="Enter you experience elevel"
        options={[
          { value: "beginner", label: "Beginner" },
          { value: "intermediate", label: "Internediate" },
          { value: "advanced", label: "Advanced" },
          { value: "expert", label: "Expert" },
        ]}
      />

      <InputField
        formik={formik}
        name="currency"
        type="select"
        lab="Select Currency"
        placeholder="Select currency"
        options={[
          { value: "usd", label: "USD" },
          { value: "euro", label: "EURO" },
          { value: "pound", label: "POUND" },
        ]}
      />

      <div className="w-full flex items-center justify-between">
        <button
          type="submit"
          className="text-base lg:text-xl font-bold tracking-[1px] bg-blue-700 text-white px-3 py-1 rounded-lg cursor-pointer"
        >
          {isLoading ? "posting..." : "Post A job"}
        </button>

        <button
          disabled={isLoading}
          onClick={() => formik.resetForm()}
          type="button"
          className="text-base lg:text-xl font-normal tracking-[1px] border-[1px] border-blue-700 text-blue-700 px-3 py-1 rounded-lg cursor-pointer"
        >
          Clear Form
        </button>
      </div>
    </form>
  );
}
