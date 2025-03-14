import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller";
import {
  handleValidationErrors,
  signInValidations,
  signUpValidations,
} from "../middlewares/validator";

const authRouter = Router();

authRouter.post("/sign-up", signUpValidations, handleValidationErrors, signUp);
authRouter.post("/sign-in", signInValidations, handleValidationErrors, signIn);
authRouter.post("/sign-out", signOut);

export default authRouter;
