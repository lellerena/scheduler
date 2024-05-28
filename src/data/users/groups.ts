import { db } from '@/lib/db'

//Obtener lista de solicitudes que ha enviado el user para unirse a grupos
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

//Obtener lista de invitaciones del user para unirse a grupos
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

//Obtener grupos a los que pertenece el user
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

export async function getPublicGroups() {
    try {
        const publicGroups = await db.group.findMany({
            where: {
                visibility: 'PUBLIC'
            },
            select: {
                id: true,
                name: true,
                description: true,
                image: true,
                createdAt: true,
                updatedAt: true,
                admin: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })

        return { success: 'Public groups found!', data: publicGroups }
    } catch (err) {
        console.log(err)
        return { error: 'Error getting public groups!' }
    }
}