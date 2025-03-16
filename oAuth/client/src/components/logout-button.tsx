'use client'
import { logout } from '@/actions/auth.action'
import { useMutation } from '@/hooks/use-mutation'
import React from 'react'

export default function LogoutButton() {
    const { isMutating, startMutation } = useMutation()
    const handleLogout = () => {
        startMutation(logout)
    }
    return (
        <button onClick={handleLogout} className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded'>
            Logout
        </button>
    )
}
