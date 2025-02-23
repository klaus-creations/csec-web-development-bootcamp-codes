import * as yup from "yup";

export const firstInputvalidations = yup.object({
  title: yup
    .string()
    .required("Please enter the title of the job")
    .min(3, "title must be more than 5 character")
    .max(20, "title cannot exceed 20 characters"),
  description: yup
    .string()
    .required("Please enter the description")
    .min(3, "What kind of name do you have?"),
  type: yup.string().required("please enter the job type"),
  company: yup.string().required("Please enter the company name"),
});

export const secondInputValidation = yup.object({
  logo: yup.string().required("Please upload a logo"),
  salary: yup.string().required("please enter the salary of the job"),
  location: yup
    .string()
    .required("Please enter the location")
    .min(3, "location must be more than 5 character")
    .max(20, "location cannot exceed 40 characters"),
});
