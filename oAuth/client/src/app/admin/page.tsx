import { getUsers } from '@/actions/user.action'
import Link from 'next/link'
import React from 'react'

export default async function Page() {
    const users = await getUsers()
    return (
        <div className="w-full flex justify-center items-center flex-col py-10">
            <h1 className="text-xl font-bold">Admin Page</h1>
            <div className="py-2 flex gap-2">
                <Link href={'/'} className="hover:underline">Home</Link>
            </div>
            <div className='w-full max-w-sm p-4 rounded-lg shadow-lg border space-y-2'>
                {users.map(user => (
                    <div key={user._id} className='text-center'>
                        <h2 className='text-2xl font-semibold'>{user.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
