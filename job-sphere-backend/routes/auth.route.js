import { Router } from "express";
import {
  isAdmin,
  isAuthenticated,
  signIn,
  signOut,
  signUp,
} from "../controllers/auth.controller.js";
import {
  handleValidationErrors,
  signInValidations,
  signUpValidations,
} from "../middlewares/validator.js";
import { authorize } from "../middlewares/auth.middleware.js";
import { checkAdmin } from "../middlewares/check-admin.middleware.js";

const authRouter = Router();

authRouter.post("/sign-up", signUpValidations, handleValidationErrors, signUp);
authRouter.post("/sign-in", signInValidations, handleValidationErrors, signIn);
authRouter.post("/sign-out", signOut);
authRouter.get("/is-auth", authorize, isAuthenticated);
authRouter.get("/is-admin", authorize, checkAdmin, isAdmin);

export default authRouter;
