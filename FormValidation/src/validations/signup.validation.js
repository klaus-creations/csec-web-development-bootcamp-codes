import * as yup from "yup";

export const personalInfoValidation = yup.object({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .min(3, "What kind of name do you have?")
    .max(100, "Maximum limit"),
  lastName: yup
    .string()
    .required("Please enter your last name")
    .min(3, "What kind of name do you have?"),
  email: yup.string().required().email("Please enter a valid email"),
  phoneNumber: yup
    .string()
    .required()
    .matches(
      /^(?:\+251|0)?\(?(9|7)\)?\d{8}$/,
      "Please enter a valid phone Number"
    ),
});

export const handleValidation = yup.object({
  leetcode: yup.string().required("Please enter your leetcode username"),
  codeforces: yup.string().required("Please enter your codeforces username"),
  github: yup.string().required("Please enter your github username"),
});

export const credentialsValidation = yup.object({
  username: yup
    .string()
    .required("Please enter your username")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf(
      [yup.ref("password")],
      "Your password and confirmation doesn't match"
    ),
});
