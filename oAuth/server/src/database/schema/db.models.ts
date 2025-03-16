import connectDB from "../config/mongoose.config";
import { userModel } from "./user.schema";

export const db = {
    connect: connectDB,
    user: userModel,
}