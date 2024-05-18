import { db } from '@/lib/db'

export async function getGroupJoinRequests(userId: string) {
    try {
        const requests = await db.groupJoinRequest.findMany({
            where: {
                userId: userId
            },
            include: {
                group: {
                    select: {
                        id: true,
                        name: true,
                        description: true
                    }
                },
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

        return { success: 'Group join requests found!', data: requests }
    } catch (err) {
        console.log(err)
        return { error: 'Error getting group join requests!' }
    }
}
