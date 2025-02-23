import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { firstInputvalidations } from "../../validations/newjobvalidation";
import InputField from "./InputField";
import { setJobData1, setJobPage } from "../../features/slices";

export default function FirstInputs() {
  const dispatch = useDispatch();
  const jobData = useSelector((state) => state.slice.jobData1);

  const formik = useFormik({
    initialValues: jobData || {},
    onSubmit: (values) => {
      dispatch(setJobData1(values));
      dispatch(setJobPage(2));
      console.log("Form Values Submitted:", values);
    },
    validationSchema: firstInputvalidations,
    enableReinitialize: true,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[40%] flex flex-col items-start gap-4"
    >
      <InputField
        formik={formik}
        name="title"
        type="text"
        lab="Job Title"
        placeholder="Enter Job Title"
      />
      <InputField
        formik={formik}
        name="description"
        type="text"
        lab="Description"
        placeholder={"Enter description"}
      />

      <InputField
        formik={formik}
        name="company"
        type="text"
        lab="Company Name"
        placeholder={"Enter Company Name"}
      />
      <InputField
        formik={formik}
        name="type"
        type="select"
        lab="Job Type"
        placeholder="Select Job Type"
        options={[
          { value: "full-time", label: "Full Time" },
          { value: "part-time", label: "Part Time" },
          { value: "internship", label: "Internship" },
          { value: "contract", label: "Contract" },
          { value: "volunteer", label: "Volunteer" },
        ]}
      />
      <div className="w-full flex items-center justify-between">
        <button
          type="submit"
          className="text-base lg:text-xl font-bold tracking-[1px] bg-blue-700 text-white px-3 py-1 rounded-lg cursor-pointer"
        >
          Continue
        </button>

        <button
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
