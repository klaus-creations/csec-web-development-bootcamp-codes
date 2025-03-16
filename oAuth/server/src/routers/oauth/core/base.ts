import { z } from "zod"
import { OAuthProvider } from "../providers/provider"

export class OAuthClient<T> {
  private readonly provider: OAuthProvider
  private readonly clientId: string
  private readonly clientSecret: string
  private readonly scopes: string[]

  private readonly urls: {
    auth: string
    token: string
    user: string
  }

  private readonly userInfo: {
    schema: z.ZodSchema<T>
    parser: (data: T) => { id: string; email: string; name: string }
  }

  private readonly tokenSchema = z.object({
    access_token: z.string(),
    token_type: z.string(),
  })

  constructor({
    provider,
    clientId,
    clientSecret,
    scopes,
    urls,
    userInfo,
  }: {
    provider: OAuthProvider
    clientId: string
    clientSecret: string
    scopes: string[]
    urls: {
      auth: string
      token: string
      user: string
    }
    userInfo: {
      schema: z.ZodSchema<T>
      parser: (data: T) => { id: string; email: string; name: string }
    }
  }) {
    this.provider = provider
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.scopes = scopes
    this.urls = urls
    this.userInfo = userInfo
  }

  private get redirectUrl() {
    return `${process.env.OAUTH_REDIRECT_URL_BASE}/${this.provider}`
  }

  private async fetchToken(code: string) {
    const res = await fetch(this.urls.token, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        code,
        redirect_uri: this.redirectUrl.toString(),
        grant_type: "authorization_code",
        client_id: this.clientId,
        client_secret: this.clientSecret,
      }),
    })

    const rawData = await res.json()
    const { data, success, error } = this.tokenSchema.safeParse(rawData)
    if (!success) throw new InvalidTokenError(error)
    return {
      accessToken: data.access_token,
      tokenType: data.token_type,
    }
  }

  createAuthUrl() {
    const url = new URL(this.urls.auth)
    url.searchParams.set("client_id", this.clientId)
    url.searchParams.set("redirect_uri", this.redirectUrl)
    url.searchParams.set("response_type", "code")
    url.searchParams.set("scope", this.scopes.join(" "))
    return url.toString()
  }

  async fetchUser(code: string) {
    const { accessToken, tokenType } = await this.fetchToken(code)
    const res = await fetch(this.urls.user, {
      headers: {
        Authorization: `${tokenType} ${accessToken}`,
      },
    })

    const rawData = await res.json()
    const { data, success, error } = this.userInfo.schema.safeParse(rawData)
    if (!success) throw new InvalidUserError(error)
    return data
  }
}


class InvalidTokenError extends Error {
  cause: z.ZodError;

  constructor(zodError: z.ZodError) {
    super("Invalid Token")
    this.cause = zodError
  }
}

class InvalidUserError extends Error {
  cause: z.ZodError;

  constructor(zodError: z.ZodError) {
    super("Invalid User")
    this.cause = zodError
  }
}