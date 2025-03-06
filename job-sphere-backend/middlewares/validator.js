import { body, validationResult } from "express-validator";

export const validateUser = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 5 characters long"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("age")
    .notEmpty()
    .withMessage("Age is required")
    .isInt({ min: 1 })
    .withMessage("Age must be a positive number"),
];

export const validateJob = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .withMessage("Title must be a string")
    .isLength({ min: 5, max: 100 })
    .withMessage("Title must be between 5 and 100 characters"),

  body("type")
    .notEmpty()
    .withMessage("Job type is required")
    .isString()
    .withMessage("Job type must be a string")
    .isIn(["Full-time", "Part-time", "Contract", "Internship"])
    .withMessage("Invalid job type"),

  body("salary")
    .notEmpty()
    .withMessage("Salary is required")
    .custom((value) => {
      if (typeof value !== "number") {
        throw new Error("Salary must be a number");
      }
      return true;
    })
    .isInt({ min: 0 })
    .withMessage("Salary must be a positive integer"),

  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isString()
    .withMessage("Description must be a string")
    .isLength({ min: 10, max: 1000 })
    .withMessage("Description must be between 10 and 1000 characters"),

  body("company")
    .notEmpty()
    .withMessage("Company name is required")
    .isString()
    .withMessage("Company name must be a string")
    .isLength({ min: 2, max: 50 })
    .withMessage("Company name must be between 2 and 50 characters"),

  body("logo")
    .notEmpty()
    .withMessage("Logo URL is required")
    .isURL()
    .withMessage("Logo must be a valid URL"),

  body("isBookMarked")
    .notEmpty()
    .withMessage("Bookmark status is required")
    .isBoolean()
    .withMessage("Bookmark status must be a boolean"),

  body("location")
    .notEmpty()
    .withMessage("Location is required")
    .isString()
    .withMessage("Location must be a string")
    .isLength({ min: 5, max: 100 })
    .withMessage("Location must be between 5 and 100 characters"),

  body("experienceLevel")
    .notEmpty()
    .withMessage("Experience level is required")
    .isString()
    .withMessage("Experience level must be a string")
    .isIn(["Entry Level", "Mid Level", "Senior Level"])
    .withMessage("Invalid experience level"),

  body("currency")
    .notEmpty()
    .withMessage("Currency is required")
    .isString()
    .withMessage("Currency must be a string")
    .isLength({ min: 3, max: 3 })
    .withMessage("Currency must be a 3-character code (e.g., USD)"),
];

export const validateUpdateJob = [
  body("title")
    .optional()
    .isString()
    .withMessage("Title must be a string")
    .isLength({ min: 5, max: 100 })
    .withMessage("Title must be between 5 and 100 characters"),

  body("type")
    .optional()
    .isString()
    .withMessage("Job type must be a string")
    .isIn(["Full-time", "Part-time", "Contract", "Internship"])
    .withMessage("Invalid job type"),

  body("salary")
    .optional()
    .custom((value) => {
      if (typeof value !== "number") {
        throw new Error("Salary must be a number");
      }
      return true;
    })
    .isInt({ min: 0 })
    .withMessage("Salary must be a positive integer"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string")
    .isLength({ min: 10, max: 1000 })
    .withMessage("Description must be between 10 and 1000 characters"),

  body("company")
    .optional()
    .isString()
    .withMessage("Company name must be a string")
    .isLength({ min: 2, max: 50 })
    .withMessage("Company name must be between 2 and 50 characters"),

  body("logo").optional().isURL().withMessage("Logo must be a valid URL"),

  body("isBookMarked")
    .optional()
    .isBoolean()
    .withMessage("Bookmark status must be a boolean"),

  body("location")
    .optional()
    .isString()
    .withMessage("Location must be a string")
    .isLength({ min: 5, max: 100 })
    .withMessage("Location must be between 5 and 100 characters"),

  body("experienceLevel")
    .optional()
    .isString()
    .withMessage("Experience level must be a string")
    .isIn(["Entry Level", "Mid Level", "Senior Level"])
    .withMessage("Invalid experience level"),

  body("currency")
    .optional()
    .isString()
    .withMessage("Currency must be a string")
    .isLength({ min: 3, max: 3 })
    .withMessage("Currency must be a 3-character code (e.g., USD)"),
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
