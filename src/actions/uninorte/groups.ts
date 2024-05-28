'use server'

import { db } from '@/lib/db'

export async function createGroup(name: string, description: string, adminId: string, visibility: 'PUBLIC' | 'PRIVATE', imageUrl?: string) {
    try {
        // Crear el grupo
        const newGroup = await db.group.create({
            data: {
                name: name,
                description: description,
                adminId: adminId,
                visibility: visibility,
                image: imageUrl
            }
        })

        await db.groupMembership.create({
            data: {
                userId: adminId,
                groupId: newGroup.id
            }
        })

        return { success: 'Group created successfully!', data: newGroup }
    } catch (err) {
        console.log(err)
        return { error: 'Error creating group!' }
    }
}

//Enviar invitación a un usuario para que se una a un grupo
export async function sendGroupInvitation(groupId: string, destinyId: string) {
    try {
        // check if the user is already in the group
        const membership = await db.groupMembership.findFirst({
            where: {
                userId: destinyId,
                groupId: groupId
            }
        })

        if (membership) {
            return { error: 'The user is already a member of this group!' }
        }

        // Check if the user already have a pending invitation to join at group
        const existingInvitation = await db.groupInvitation.findFirst({
            where: {
                userId: destinyId,
                groupId: groupId,
                status: 'PENDING'
            }
        })

        if (existingInvitation) {
            return { error: 'The user already has a pending invitation to this group!' }
        }

        // Create group invitation
        await db.groupInvitation.create({
            data: {
                userId: destinyId,
                groupId: groupId
            }
        })

        return { success: 'Group invitation sent!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error sending group invitation!' }
    }
}

//Usuario acepta invitación para unirse a un grupo
export async function acceptGroupInvitation(invitationId: string) {
    try {
        // Search invitation
        const groupInvitation = await db.groupInvitation.findFirst({
            where: {
                id: invitationId
            }
        })

        if (!groupInvitation) {
            return { error: 'No group invitation found!' }
        }

        const userId = groupInvitation.userId
        const groupId = groupInvitation.groupId

         // Update status to "ACCEPTED"
         await db.groupInvitation.update({
            where: {
                id: invitationId
            },
            data: {
                status: 'ACCEPTED'
            }
        })

        // Add user to the group
        await db.groupMembership.create({
            data: {
                userId: userId,
                groupId: groupId
            }
        })

        return { success: 'Group invitation accepted!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error accepting group invitation!' }
    }
}


//Usuario rechaza invitación para unirse a un grupo
export async function declineGroupInvitation(invitationId: string) {
    try {
        
        const groupInvitation = await db.groupInvitation.findFirst({
            where: {
                id: invitationId
            }
        })

        if (!groupInvitation) {
            return { error: 'No group invitation found!' }
        }

        // Update status to "REJECTED"
        await db.groupInvitation.update({
            where: {
                id: invitationId
            },
            data: {
                status: 'REJECTED'
            }
        })

        return { success: 'Group invitation declined!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error declining group invitation!' }
    }
}

//Usuario solicita unirse a un grupo
export async function requestGroupJoin(userId: string, groupId: string) {
    try {
        // Verificar si el usuario ya es miembro del grupo
        const membership = await db.groupMembership.findFirst({
            where: {
                userId: userId,
                groupId: groupId
            }
        })

        if (membership) {
            return { error: 'The user is already a member of this group!' }
        }

        // Verificar si el usuario ya tiene una solicitud pendiente para unirse al grupo
        const existingRequest = await db.groupJoinRequest.findFirst({
            where: {
                userId: userId,
                groupId: groupId,
                status: 'PENDING'
            }
        })

        if (existingRequest) {
            return { error: 'The user already has a pending join request for this group!' }
        }

        // Crear solicitud de unión al grupo
        await db.groupJoinRequest.create({
            data: {
                userId: userId,
                groupId: groupId
            }
        })

        return { success: 'Group join request sent!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error sending group join request!' }
    }
}

//Grupo acepta que un usuario entre
export async function acceptGroupJoinRequest(requestId: string) {
    try {
        // Buscar la solicitud de unión al grupo
        const groupJoinRequest = await db.groupJoinRequest.findFirst({
            where: {
                id: requestId
            }
        })

        if (!groupJoinRequest) {
            return { error: 'No group join request found!' }
        }

        const userId = groupJoinRequest.userId
        const groupId = groupJoinRequest.groupId


        await db.groupJoinRequest.update({
            where: {
                id: requestId
            },
            data: {
                status: 'ACCEPTED'
            }
        })

        // Agregar al usuario como miembro del grupo
        await db.groupMembership.create({
            data: {
                userId: userId,
                groupId: groupId
            }
        })

        return { success: 'Group join request accepted!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error accepting group join request!' }
    }
}

//Grupo rechaza que un usuario entre
export async function declineGroupJoinRequest(requestId: string) {
    try {
        // Buscar la solicitud de unión al grupo
        const groupJoinRequest = await db.groupJoinRequest.findFirst({
            where: {
                id: requestId
            }
        })

        if (!groupJoinRequest) {
            return { error: 'No group join request found!' }
        }

        // Eliminar la solicitud de unión al grupo
        // Update status to "REJECTED"
        await db.groupJoinRequest.update({
            where: {
                id: requestId
            },
            data: {
                status: 'REJECTED'
            }
        })

        return { success: 'Group join request declined!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error declining group join request!' }
    }
}


//Usuario abandona el grupo
export async function leaveGroup(userId: string, groupId: string) {
    try {
        
        const groupMembership = await db.groupMembership.findFirst({
            where: {
                userId: userId,
                groupId: groupId
            }
        })

        if (!groupMembership) {
            return { error: 'The user is not a member of this group!' }
        }

        // Delete membership 
        await db.groupMembership.delete({
            where: {
                id: groupMembership.id
            }
        })

        return { success: 'User left the group successfully!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error leaving the group!' }
    }
}
