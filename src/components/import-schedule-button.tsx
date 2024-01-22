'use client'

import { useNewScheduleModal } from '@/hooks/use-new-schedule-store'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

interface ImporScheduleButtonProps {
    text?: string
    withIcon?: boolean
}

export default function ImporScheduleButton({
    text = 'Import Now',
    withIcon = true
}: ImporScheduleButtonProps) {
    const { onOpen } = useNewScheduleModal()

    return (
        <div className="flex">
            <Button onClick={() => onOpen()}>
                {withIcon && <Plus className="mr-2 h-4 w-4" />} {text}
            </Button>
        </div>
    )
}
