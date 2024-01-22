'use client'

import { DataTable } from '@/components/ui/data-table'

import { ScheduleColumn, columns } from './columns'

interface SchedulesClientProps {
    data: ScheduleColumn[]
}

export const SchedulesClient: React.FC<SchedulesClientProps> = ({ data }) => {
    return (
        <>
            <DataTable searchKey="name" columns={columns} data={data} />
        </>
    )
}
