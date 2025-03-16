export type Cookies = {
    set: (
        key: string,
        value: string,
        options: {
            secure?: boolean
            httpOnly?: boolean
            sameSite?: "strict" | "lax"
            expires?: number
        }
    ) => void
    get: (key: string) => { name: string; value: string } | undefined
    delete: (key: string) => void
}

export type User = {
    _id: string
    name: string
    email: string
    role: string
    accounts: {
        provider: string
        providerId: string
    }[]
}