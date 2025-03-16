import { asyncHandler } from "@/middleware/async-handler";
import { generateAuthJwtToken } from "@/services/generate-jwt-token";
import express, { Request, Response } from "express";
import { connectUserToAccount } from "./oauth.service";
import { getOAuthClient, OAuthProvider } from "./providers/provider";

const oauthController = express.Router();

oauthController.get("/url/:provider", asyncHandler((req, res) => {
    const provider = req.params.provider as OAuthProvider;
    const oAuthClient = getOAuthClient(provider)
    const url = oAuthClient.createAuthUrl()
    res.json({ url });
}));

oauthController.get("/redirect/:provider", asyncHandler(async (req: Request, res: Response) => {
    const provider = req.params.provider as OAuthProvider;
    const code = req.query.code as string;

    try {
        const oAuthClient = getOAuthClient(provider)
        const oAuthUser = await oAuthClient.fetchUser(code)
        const user = await connectUserToAccount(oAuthUser, {
            provider: provider,
            providerId: oAuthUser.id,
        })

        const { accessToken } = await generateAuthJwtToken(user._id as string);

        res.cookie("access-token", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
        res.redirect("http://localhost:3000");

    } catch (error) {
        console.error(error)
        res.redirect(
            `http://localhost:3000/login?oauthError=${encodeURIComponent(
                "Failed to connect. Please try again."
            )}`
        );
    }
})
);

export { oauthController }