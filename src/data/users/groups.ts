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


export async function getGroupInvitations(userId: string) {
    try {
        const invitations = await db.groupInvitation.findMany({
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

        return { success: 'Group invitations found!', data: invitations }
    } catch (err) {
        console.log(err)
        return { error: 'Error getting group invitations!' }
    }
}

export async function getUserGroups(userId: string) {
    try {
        const memberships = await db.groupMembership.findMany({
            where: {
                userId: userId
            },
            include: {
                group: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        adminId: true,
                        createdAt: true,
                        updatedAt: true
                    }
                }
            }
        })

        const groups = memberships.map((membership: { group: any }) => membership.group)


        return { success: 'Groups found!', data: groups }
    } catch (err) {
        console.log(err)
        return { error: 'Error getting user groups!' }
    }
}