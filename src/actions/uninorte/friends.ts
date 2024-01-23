'use server'

import * as z from 'zod'

import { db } from '@/lib/db'

export async function sendFriendRequest(originId: string, destinyId: string) {
    try {
        await db.friendshipRequest.create({
            data: {
                userId: originId,
                friendId: destinyId
            }
        })
        return { success: 'Friend request sent!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error sending friend request!' }
    }
}
