import { ScheduleVisibility } from '@prisma/client'
import * as z from 'zod'

export const newScheduleUnLoginSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1)
})

export const importNewScheduleSchema = z.object({
    termId: z.string().min(1),
    token: z.string().min(1),
    userId: z.string().min(1)
})

export const newScheduleSchema = z.object({
    userId: z.string().min(1),
    name: z.string().min(1),
    period: z.string().min(1),
    visibility: z
        .string()
        .min(1)
        .refine((value) => {
            return Object.values(ScheduleVisibility).includes(value as any)
        }, 'Invalid visibility')
})
