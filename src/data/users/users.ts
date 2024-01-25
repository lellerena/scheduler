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
            },
            NOT: {
                OR: [
                    {
                        FriendshipRequest: {
                            some: {
                                userId: userId
                            }
                        }
                    }
                ]
            },
            AND: [
                {
                    NOT: [
                        { friends: { some: { friendId: userId } } },
                        { Friendship: { some: { friendId: userId } } }
                    ]
                },
                {
                    NOT: [
                        { friends: { some: { userId } } },
                        { Friendship: { some: { userId } } }
                    ]
                }
            ]
        },
        take,
        skip
    })

    return users
}

export type UserType = Pick<User, 'id' | 'name' | 'email' | 'image'> & {
    friends?: {
        id: string
    }[]
}

export const searchUsers = async (query: string, userId: string) => {
    const users = await db.user.findMany({
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
            image: true,
            friends: {
                select: {
                    id: true
                },
                where: {
                    OR: [
                        {
                            friendId: userId
                        },
                        {
                            userId: userId
                        }
                    ]
                }
            }
        }
    })

    if (!users || users.length === 0) {
        return { error: 'No users found' }
    }

    return { success: 'Users found', data: users }
}
