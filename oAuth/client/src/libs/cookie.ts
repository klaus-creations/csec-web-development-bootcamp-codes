// 'use server';

// import { TAuthToken } from "@repo/common";
// import { jwtDecode } from "jwt-decode";
// import { cookies } from "next/headers";
// import { cache } from "react";

// export const saveAuthJwt = async (jwt: TAuthToken) => {
//     try {
//         const cookieStore = await cookies()
//         const accessTokenExpire = jwtDecode(jwt.accessToken).exp;
//         const refreshTokenExpire = jwtDecode(jwt.refreshToken).exp;
//         cookieStore.set({
//             name: 'accessToken',
//             // httpOnly: process.env.NODE_ENV === 'production',
//             value: jwt.accessToken,
//             // secure: process.env.NODE_ENV === 'production',
//             expires: accessTokenExpire
//                 ? new Date(accessTokenExpire * 1000)
//                 : undefined,
//         });

//         cookieStore.set({
//             name: 'refreshToken',
//             // httpOnly: process.env.NODE_ENV === 'production',
//             value: jwt.refreshToken,
//             // secure: process.env.NODE_ENV === 'production',
//             expires: refreshTokenExpire
//                 ? new Date(refreshTokenExpire * 1000)
//                 : undefined,
//         });
//         return {}
//     } catch (error) {
//         console.log({ error });
//     }
// }

// export const getAuthJwt = cache(async (): Promise<TAuthToken | Partial<TAuthToken>> => {
//     const cookieStore = await cookies()
//     try {
//         const accessToken = cookieStore.get('accessToken')?.value;
//         const refreshToken = cookieStore.get('refreshToken')?.value;
//         return { accessToken, refreshToken };
//     } catch (error) {
//         return { accessToken: undefined, refreshToken: undefined }
//     }
// })

// export const getAuthParams = cache(async (): Promise<Record<string, string>> => {
//     return {}
// })

// export const removeAuthJwt = async () => {
//     try {
//         const cookieStore = await cookies()
//         cookieStore.delete('accessToken');
//         cookieStore.delete('refreshToken');
//         console.log('Auth Removed');
//     } catch (error) {
//         console.log('Error Removing Auth', error);
//     }
// }
