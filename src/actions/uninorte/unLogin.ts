'use server'

import * as z from 'zod'

import { newScheduleUnLoginSchema } from '@/schemas'
const Login_URL =
    'https://ri7bptmuz0.execute-api.us-east-1.amazonaws.com/dev/api/v1/users/login'

export const unLogin = async (
    values: z.infer<typeof newScheduleUnLoginSchema>
) => {
    const validatedFields = newScheduleUnLoginSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' }
    }

    const { username, password } = validatedFields.data

    const response = await fetch(Login_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })

    const data = await response.json()

    if (data.error) {
        return { error: data.message }
    }

    return { success: 'Logged in!', data: data }
}
