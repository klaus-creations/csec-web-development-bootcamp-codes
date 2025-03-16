import { getMe } from '@/actions/user.action'
import { redirect } from 'next/navigation'
import ToggleTole from '../../components/toggle-role'

export default async function Page() {
    const user = await getMe()
    if (!user) return redirect('/login')
    return (
        <div className="w-full flex justify-center items-center flex-col py-10">
            <h1 className="text-xl font-bold">Profile Page</h1>
            <div className='w-full max-w-sm p-4 rounded-lg shadow-lg border space-y-2'>
                <div className='text-center'>
                    <h2 className='text-2xl font-semibold'>{user.name}</h2>
                    <div>{user.email}</div>
                    <div className='font-black'>{user.role}</div>
                </div>
            </div>
            <div className='mt-6'>
                <ToggleTole />
            </div>
        </div>
    )
}
