'use server'

import { db } from '@/lib/db'


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
