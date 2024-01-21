'use client'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { DataTable } from './data-table'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

import { ScheduleColumn, columns } from './columns'
import { schedule } from '@/data/schedules/schedules'

interface ScheduleClientProps {
    data: schedule
    tableData: ScheduleColumn[]
}

export const ScheduleIdClient: React.FC<ScheduleClientProps> = ({
    data,
    tableData
}) => {
    const params = useParams()
    const router = useRouter()

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
            <DataTable
                searchKey="name"
                columns={columns}
                data={tableData}
                pageSize={15}
            />
        </>
    )
}
