'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { friendsPath } from './constants'

export async function sendFriendRequest(originId: string, destinyId: string) {
    try {
        // check if the user is already friends with the destiny user
        const friendship = await db.friendship.findFirst({
            where: {
                OR: [
                    { userId: originId, friendId: destinyId },
                    { userId: destinyId, friendId: originId }
                ]
            }
        })

        if (friendship) {
            return { error: 'You are already friends with this user!' }
        }

        // check if the user already sent a friend request to the destiny user or vice versa
        const friendshipRequest = await db.friendshipRequest.findFirst({
            where: {
                OR: [
                    { userId: originId, friendId: destinyId },
                    { userId: destinyId, friendId: originId }
                ]
            }
        })

        if (friendshipRequest) {
            if (friendshipRequest.userId === originId)
                return {
                    error: 'You already sent a friend request to this user!'
                }
            else {
                await acceptFriendRequest(friendshipRequest.id)
                return {
                    success:
                        'You already received ad friend request from this user so, Friend request accepted!'
                }
            }
        }

        await db.friendshipRequest.create({
            data: {
                userId: originId,
                friendId: destinyId
            }
        })

        revalidatePath(friendsPath)

        return { success: 'Friend request sent!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error sending friend request!' }
    }
}

export async function acceptFriendRequest(friendRequstId: string) {
    try {
        const friendshipRequest = await db.friendshipRequest.findFirst({
            where: {
                id: friendRequstId
            }
        })

        if (!friendshipRequest) {
            return { error: 'No friend request found!' }
        }

        const originId = friendshipRequest.userId
        const destinyId = friendshipRequest.friendId

        await db.friendshipRequest.delete({
            where: {
                id: friendshipRequest.id
            }
        })

        await db.friendship.create({
            data: {
                userId: originId,
                friendId: destinyId
            }
        })

        revalidatePath(friendsPath)

        return { success: 'Friend request accepted!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error accepting friend request!' }
    }
}

export async function declineFriendRequest(friendRequstId: string) {
    try {
        const friendshipRequest = await db.friendshipRequest.findFirst({
            where: {
                id: friendRequstId
            }
        })

        if (!friendshipRequest) {
            return { error: 'No friend request found!' }
        }

        await db.friendshipRequest.delete({
            where: {
                id: friendshipRequest.id
            }
        })
        revalidatePath(friendsPath)

        return { success: 'Friend request declined!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error declining friend request!' }
    }
}
