'use server'

import { db } from '@/lib/db'
import { Schedule, ScheduleVisibility } from '@prisma/client'

export interface schedule extends Schedule {}

export const getSchedulesByUserId = async (
    userId: string
): Promise<schedule[]> => {
    return await db.schedule.findMany({
        where: {
            userId
        },
        orderBy: {
            period: 'desc'
        }
    })
}

export const getScheduleById = async (scheduleId: string) => {
    const rawSchedule = await db.schedule.findUnique({
        where: {
            id: scheduleId
        }
    })

    if (!rawSchedule) {
        return null
    }

    const schedule = {
        ...rawSchedule
    }

    return schedule
}

export const getCurrentScheduleByUserId = async (userId: string) => {
    const rawSchedule = await db.schedule.findFirst({
        where: {
            userId,
            current: true
        },
        include: {
            user: {
                select: {
                    name: true,
                    image: true
                }
            }
        }
    })

    if (!rawSchedule) {
        return null
    }

    console.log(JSON.stringify(rawSchedule))

    return rawSchedule
}

export const getAnotherPersonCurrentSchedule = async (
    userId: string,
    requestantId: string
) => {
    const schedule = await getCurrentScheduleByUserId(userId)
    if (!schedule) {
        return null
    }

    if (schedule.visibility === ScheduleVisibility.PUBLIC) {
        return schedule
    }

    // check if they are friends
    const areFriends = await db.friendship.findFirst({
        where: {
            OR: [
                { userId, friendId: requestantId },
                { userId: requestantId, friendId: userId }
            ]
        }
    })

    if (areFriends) {
        return schedule
    }

    return null
}

export interface Subject {
    nrc: string
    name: string
    shortName: string
    instructors: string
    color: string
    type: string
    place: string
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    startParsedTime: string
    endParsedTime: string
}
