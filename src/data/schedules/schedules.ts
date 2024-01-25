'use server'

import { db } from '@/lib/db'
import { Schedule } from '@prisma/client'

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
        }
    })

    if (!rawSchedule) {
        return null
    }

    return rawSchedule
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
