import { db } from '@/lib/db'

export async function getFriendsRequests(userId: string) {
    try {
        const requests = await db.friendshipRequest.findMany({
            where: {
                friendId: userId
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })

        return { success: 'Friend requests found!', data: requests }
    } catch (err) {
        console.log(err)
        return { error: 'Error getting friend requests!' }
    }
}

export async function getSentFriendsRequests(userId: string) {
    try {
        const requests = await db.friendshipRequest.findMany({
            where: {
                userId: userId
            },
            include: {
                friend: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })

        return { success: 'Friend requests found!', data: requests }
    } catch (err) {
        console.log(err)
        return { error: 'Error getting friend requests!' }
    }
}

export async function getFriends(userId: string) {
    try {
        const friends = await db.friendship.findMany({
            where: {
                OR: [
                    {
                        userId: userId
                    },
                    {
                        friendId: userId
                    }
                ]
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                },
                friend: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })

        return { success: 'Friends found!', data: friends }
    } catch (err) {
        console.log(err)
        return { error: 'Error getting friends!' }
    }
}
