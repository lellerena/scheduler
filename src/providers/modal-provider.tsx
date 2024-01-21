'use client'

import { useEffect, useState } from 'react'

import { NewScheduleModal } from '@/components/modals/new-schedule-modal'

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <NewScheduleModal />
        </>
    )
}
