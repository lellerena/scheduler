import Navbar from '@/components/navbar/navbar'
import { currentUser } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
