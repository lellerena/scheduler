'use server'

import path from 'path'
import fs from 'fs/promises'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'

const files_path = './src/actions/draft/files'

export const writeDraft = async (content: string, userId: string) => {
    console.log(`Writing draft for user ${userId}`)
    try {
        const existingDraft = await db.draft.findUnique({
            where: {
                userId: userId
            }
        })

        if (existingDraft) {
            await db.draft.update({
                where: {
                    userId: userId
                },
                data: {
                    content: content
                }
            })
        } else {
            await db.draft.create({
                data: {
                    userId: userId,
                    content: content
                }
            })
        }
        return { success: 'Draft written' }
    } catch (err) {
        console.log(err)
        return { error: 'Error writing draft' }
    }
}

const draftError = 'Error writing draft'

export const getDraftByUserId = async (userId: string) => {
    try {
        const draft = await db.draft.findUnique({
            where: {
                userId: userId
            }
        })

        return draft
    } catch (err) {
        console.log(err)
        redirect('/home/schedules')
        return draftError
    }
}

export const deleteDraft = async (userId: string) => {
    try {
        await db.draft.delete({
            where: {
                userId: userId
            }
        })
        return { success: 'Draft deleted' }
    } catch (err) {
        console.log(err)
        return { error: 'Error deleting draft' }
    }
}
