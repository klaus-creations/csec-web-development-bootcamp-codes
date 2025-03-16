import { createGoogleOAuthClient } from "./google"
import { createGithubOAuthClient } from "./github"

export enum OAuthProvider {
    google = 'google',
    github = 'github',
}

export function getOAuthClient(provider: OAuthProvider) {
    switch (provider) {
        case OAuthProvider.google:
            return createGoogleOAuthClient()
        case OAuthProvider.github:
            return createGithubOAuthClient()
        default:
            throw new Error(`Invalid provider: ${provider satisfies never}`)
    }
}