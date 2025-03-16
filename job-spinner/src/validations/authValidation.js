import * as yup from "yup";

export const signupValidation = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(20, "First name cannot exceed 20 characters"),

  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(20, "Last name cannot exceed 20 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/\d/, "Password must contain at least one number"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const signinValidation = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  password: yup.string().required("Password is required"),
});
