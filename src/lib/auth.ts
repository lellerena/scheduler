import { auth } from '@/auth'
import { User } from 'next-auth'

export const currentUser = async () => {
    const session = await auth()

    return session?.user as User
}

export const currentRole = async () => {
    const session = await auth()

    return session?.user?.role
}
