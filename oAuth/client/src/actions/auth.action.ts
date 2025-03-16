'use server'

import { server_host } from "@/config/host.config";
import { Cookies } from "@/global";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getOAuthUrl(provider: string) {
    const res = await fetch(`${server_host}/oauth/url/${provider}`)
    const data = await res.json()
    redirect(data.url)
}

export const logout = async () => {
    const cookieStore = await cookies()
    cookieStore.delete('access-token')
}

export async function toggleRole() {
    const accessToken = await getAccessToken()
    const res = await fetch(`${server_host}/users/toggle-role`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    const data = await res.json()
    redirect(data.url)
}


export async function getAccessToken(cookieStore?: Pick<Cookies, 'get'>) {
    if (cookieStore === undefined) {
        cookieStore = await cookies()
    }
    const accessToken = cookieStore.get('access-token')?.value
    return accessToken || null
}