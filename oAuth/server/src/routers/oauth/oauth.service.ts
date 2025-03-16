import { db } from "@/database/schema/db.models";
import { OAuthProvider } from "./providers/provider";

export const connectUserToAccount = async (
    user: {
        email: string;
        name: string | null;
    },
    provider: {
        provider: OAuthProvider;
        providerId: string;
    }
) => {
    let existUser = await db.user.findOne({ email: user.email })

    if (!existUser) {
        existUser = await db.user.create({
            email: user.email,
            name: user.name,
            accounts: [{ provider: provider.provider, providerId: provider.providerId }],
        });
        if (existUser) {
            return existUser;
        }
    }

    existUser.accounts = existUser.accounts || [];

    const isProviderLinked = existUser.accounts.some(
        (account) => account.provider === provider.provider
    );

    if (!isProviderLinked) {
        await db.user.updateOne(
            { email: user.email },
            { $push: { accounts: { provider: provider.provider, providerId: provider.providerId } } }
        );

        const existUser = await db.user.findOne({ email: user.email }).lean();

        if (existUser) {
            return existUser;
        }
    }

    return existUser;
};
