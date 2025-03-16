import { OAuthProvider } from '@/routers/oauth/providers/provider';
import { Document, Schema, model } from 'mongoose';

export enum UserRole {
    admin = 'admin',
    user = 'user'
}

export interface User extends Document {
    name: string;
    email: string;
    role: UserRole,
    accounts?: {
        provider: OAuthProvider;
        providerId: string;
    }[]
}

export const userSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: Object.values(UserRole), default: UserRole.user, required: true },
    accounts: [{
        provider: { type: String, enum: Object.values(OAuthProvider), required: true },
        providerId: { type: String, required: true },
    }]
});

export const userModel = model<User>('User', userSchema);