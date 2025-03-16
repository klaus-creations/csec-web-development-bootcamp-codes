'use client'

import { toggleRole } from '@/actions/auth.action'
import { useMutation } from '@/hooks/use-mutation'
import React from 'react'

export default function ToggleTole() {
    const { startMutation } = useMutation()
    const handleToggle = () => {
        startMutation(async () => await toggleRole())
    }
    return (
        <button onClick={handleToggle} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Toggle Role
        </button>
    )
}
