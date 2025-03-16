import { asyncHandler } from "@/middleware/async-handler";
import express from "express";
import { getManyUser, updateUserRole } from "./users.service";
import { authGuard } from "@/guards/auth.guard";
import { UserRole } from "@/database/schema/user.schema";

const usersController = express.Router();

usersController.get("/", authGuard({ roles: [UserRole.admin] }), asyncHandler(async (req, res) => {
    const users = await getManyUser()
    res.json(users);
}));

usersController.get("/me", authGuard(), asyncHandler(async (req, res) => {
    const user = req.user
    res.json(user);
}));

usersController.get("/toggle-role", authGuard(), asyncHandler(async (req, res) => {
    const user = req.user
    const updated = await updateUserRole(user._id as string, user.role === UserRole.user ? UserRole.admin : UserRole.user)
    res.json(updated);
}));


export { usersController };
