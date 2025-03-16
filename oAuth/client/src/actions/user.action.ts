'use server'

import { server_host } from "@/config/host.config";
import { Cookies, User } from "@/global";
import { getAccessToken } from "./auth.action";
import { cache } from "react";

export const getMe = cache(async (cookieStore?: Pick<Cookies, 'get'>) => {
    const accessToken = await getAccessToken(cookieStore)
    const res = await fetch(`${server_host}/users/me`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    const data = await res.json()
    if (data.error) {
        return null
    }
    return data as User
})



export async function getUsers() {
    const accessToken = await getAccessToken()
    const res = await fetch(`${server_host}/users`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    const data = await res.json()
    if (data.error) {
        return [] as User[]
    }
    return data as User[]
}