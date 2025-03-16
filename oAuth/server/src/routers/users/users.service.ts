import { db } from "@/database/schema/db.models";
import { UserRole } from "@/database/schema/user.schema";
import { HttpException } from "@/lib/http-exception";

export const getOneUser = async (userId: string) => {
    let existUser = await db.user.findOne({ _id: userId }).lean();

    if (!existUser) {
        throw new HttpException(404, 'User not found');
    }

    return existUser;
};

export const getManyUser = async () => {
    const users = await db.user.find();
    return users;
};


export const updateUserRole = async (userId: string, role: UserRole) => {
    const user = await db.user.findOneAndUpdate({ _id: userId }, { role }).lean();
    return user;
};

