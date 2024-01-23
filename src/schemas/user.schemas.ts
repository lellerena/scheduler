import * as z from 'zod'

export const searchUsersSchema = z.object({
    query: z.string()
})
export type SearchUsersInput = z.infer<typeof searchUsersSchema>
