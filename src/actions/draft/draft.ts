'use server'

import path from 'path'
import fs from 'fs/promises'
import { redirect } from 'next/navigation'

const files_path = './src/actions/draft/files'

export const writeDraft = async (content: string, userId: string) => {
    console.log(`Writing draft for user ${userId}`)
    try {
        const filePath = path.join(files_path, `${userId}.json`)
        await fs.writeFile(filePath, content)
        return { success: 'Draft written' }
    } catch (err) {
        console.log(err)
        return { error: 'Error writing draft' }
    }
}

const draftError = 'Error writing draft'

export const getDraftByUserId = async (userId: string) => {
    try {
        const filePath = path.join(files_path, `${userId}.json`)
        const draft = await fs.readFile(filePath, 'utf-8')

        return draft
    } catch (err) {
        console.log(err)
        redirect('/home/schedules')
        return draftError
    }
}

export const deleteDraft = async (userId: string) => {
    const filePath = path.join(files_path, `${userId}.json`)
    return await fs.unlink(filePath)
}
