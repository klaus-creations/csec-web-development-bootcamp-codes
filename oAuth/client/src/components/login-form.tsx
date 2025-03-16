'use client'
import React from 'react'
import { getOAuthUrl } from '../actions/auth.action'

export default function LoginForm() {

    return (
        <div className='w-full max-w-sm p-4 bg-white rounded-lg shadow-lg border space-y-2'>
            <div className='text-center'>
                <h2 className='text-2xl font-semibold'>Login</h2>
            </div>
            <div className='space-y-2'>
                <button onClick={() => getOAuthUrl("google")} className='w-full px-4 py-2 font-semibold border cursor-pointer hover:bg-gray-100'>Google</button>
                <button onClick={() => getOAuthUrl("github")} className='w-full px-4 py-2 font-semibold border cursor-pointer hover:bg-gray-100'>Github</button>
            </div>
        </div>
    )
}
