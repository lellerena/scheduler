import * as z from 'zod'

export const newScheduleSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1)
})

export const importNewScheduleSchema = z.object({
    termId: z.string().min(1),
    token: z.string().min(1)
})
