'use server'

import * as z from 'zod'

import { importNewScheduleSchema, newScheduleSchema } from '@/schemas'
import { colors, days, hours } from '@/lib/schedule.constants'
import { ScheduleIdColumn } from '@/app/(pages)/home/schedules/[scheduleId]/components/columns'
import { Subject } from '@/data/schedules/schedules'
import { db } from '@/lib/db'
import { deleteDraft, writeDraft } from '../draft/draft'
import { ScheduleVisibility } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const SCHEDULE_LINK =
    'https://e3pc8k5p2g.execute-api.us-east-1.amazonaws.com/dev/api/v1/users/schedule'
// ?termId=202410

export const getUnSchedule = async (
    values: z.infer<typeof importNewScheduleSchema>
) => {
    const validatedFields = importNewScheduleSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' }
    }

    const { termId, token } = validatedFields.data

    const response = await fetch(`${SCHEDULE_LINK}?termId=${termId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`
        }
    })

    const res = await response.json()

    if (res.error) {
        return { error: res.message }
    }
    const data = res.data.scheduleByHours as Subject[][]

    const subjects = data.flat().filter((s) => s !== null)
    const subjectsIds = subjects.map((s) => s.nrc)

    // @ts-ignore
    const uniqueSubjects = [...new Set(subjectsIds)]
    const n = uniqueSubjects.length

    // select n random colors from the colors array without repeating
    const colorMap = new Map()
    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * colors.length)
        const color = colors[randomIndex]
        colorMap.set(uniqueSubjects[i], color)
        colors.splice(randomIndex, 1)
    }

    const tableData = [] as ScheduleIdColumn[]
    hours.forEach((hour, hourindex) => {
        const classes = data[hourindex] as Subject[]
        const sh: ScheduleIdColumn = {} as ScheduleIdColumn
        sh.hour = hour
        days.forEach((day, i) => {
            sh[day] = data[hourindex][i]
            if (classes[i]) {
                sh[day].color = colorMap.get(classes[i].nrc)
            }
        })
        tableData.push(sh)
    })

    const draft = await writeDraft(
        JSON.stringify({ data: tableData, period: values.termId }),
        values.userId
    )
    if (draft.error) {
        return { error: 'Error writing draft!' }
    }

    return { success: 'Schedule fetched!', data: tableData }
}

export const createSchedule = async (
    values: z.infer<typeof newScheduleSchema>,
    data: ScheduleIdColumn[]
) => {
    const validatedFields = newScheduleSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' }
    }

    const { name, period, visibility, userId } = validatedFields.data

    try {
        const userSchedulesCount = await db.schedule.count({
            where: {
                userId
            }
        })

        const schedule = await db.schedule.create({
            data: {
                name,
                period,
                visibility: visibility as ScheduleVisibility,
                userId,
                scheduleByHours: data as any,
                current: userSchedulesCount === 0
            }
        })

        revalidatePath('/home/schedules')
        await deleteDraft(userId)
        return { success: 'Schedule created!', data: schedule }
    } catch (err) {
        console.log(err)
        return { error: 'Error creating schedule!' }
    }
}

export const deleteSchedule = async (scheduleId: string) => {
    try {
        const schedule = await db.schedule.findUnique({
            where: {
                id: scheduleId
            }
        })

        if (!schedule) {
            return { error: 'Schedule not found!' }
        }

        await db.schedule.delete({
            where: {
                id: scheduleId
            }
        })

        if (schedule.current) {
            const newCurrentSchedule = await db.schedule.findFirst({
                where: {
                    userId: schedule.userId
                }
            })

            if (newCurrentSchedule) {
                await db.schedule.update({
                    where: {
                        id: newCurrentSchedule.id
                    },
                    data: {
                        current: true
                    }
                })
            }
        }

        revalidatePath('/home/schedules')
        return { success: 'Schedule deleted!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error deleting schedule!' }
    }
}

export const makeScheduleCurrent = async (scheduleId: string) => {
    try {
        const schedule = await db.schedule.findUnique({
            where: {
                id: scheduleId
            }
        })

        if (!schedule) {
            return { error: 'Schedule not found!' }
        }

        if (schedule.current) return { error: 'Schedule is already current!' }

        await db.schedule.updateMany({
            where: {
                userId: schedule.userId
            },
            data: {
                current: false
            }
        })

        await db.schedule.update({
            where: {
                id: scheduleId
            },
            data: {
                current: true
            }
        })

        revalidatePath('/home/schedules')
        return { success: 'Schedule updated!' }
    } catch (err) {
        console.log(err)
        return { error: 'Error updating schedule!' }
    }
}
