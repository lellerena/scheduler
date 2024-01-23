'use server'

import { db } from '@/lib/db'
import { User } from '@prisma/client'

export const getSuggestedUsers = async (userId: string, page: number = 1) => {
    const take = 5
    const skip = (page - 1) * take
    const users = await db.user.findMany({
        where: {
            id: {
                not: userId
            }
        },
        take,
        skip
    })

    return users
}

export type UserType = Pick<User, 'id' | 'name' | 'email' | 'image'>

export const searchUsers = async (query: string) => {
    const users = (await db.user.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: query,
                        mode: 'insensitive'
                    }
                }
            ]
        },
        select: {
            id: true,
            name: true,
            email: true,
            image: true
        }
    })) as UserType[]

    if (!users || users.length === 0) {
        return { error: 'No users found' }
    }

    return { success: 'Users found', data: users }
}
