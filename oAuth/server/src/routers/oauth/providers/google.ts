import { OAuthClient } from "../core/base"
import { z } from "zod"
import { OAuthProvider } from "./provider"

export function createGoogleOAuthClient() {
  return new OAuthClient({
    provider: OAuthProvider.google,
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    scopes: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    urls: {
      auth: "https://accounts.google.com/o/oauth2/v2/auth",
      token: "https://oauth2.googleapis.com/token",
      user: "https://www.googleapis.com/oauth2/v1/userinfo",
    },
    userInfo: {
      schema: z.object({
        id: z.string(),
        name: z.string().nullable(),
        given_name: z.string().nullable(),
        family_name: z.string().nullable(),
        email: z.string().email(),
      }),
      parser: (user) => ({
        id: user.id,
        name: user.name || `${user.given_name} ${user.family_name}`,
        email: user.email,
      }),
    },
  })
}
