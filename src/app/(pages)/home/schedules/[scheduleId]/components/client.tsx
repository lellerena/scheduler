'use client'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { ScheduleTable } from '@/components/schedule/schedule-table'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

import {
    ScheduleIdColumn,
    scheduleColumns
} from '@/components/schedule/schedule-columns'
import { schedule } from '@/data/schedules/schedules'
import { Schedule } from '@prisma/client'

interface ScheduleClientProps {
    data: Schedule
    tableData: ScheduleIdColumn[]
}

export const ScheduleIdClient: React.FC<ScheduleClientProps> = ({
    data,
    tableData
}) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`${data.name} | ${data.period}`}
                    description="Manage Your Schedule"
                />
                <div className="flex">
                    <Button onClick={() => {}}>
                        <Plus className="mr-2 h-4 w-4" /> Add New
                    </Button>
                </div>
            </div>
            <Separator />
            <ScheduleTable
                searchKey="name"
                columns={scheduleColumns}
                data={tableData}
                pageSize={15}
            />
        </>
    )
}
