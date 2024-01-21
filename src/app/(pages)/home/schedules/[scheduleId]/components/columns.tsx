'use client'

import { ColumnDef } from '@tanstack/react-table'
import { days } from '../page'
import { Subject } from '@/data/schedules/schedules'

export type ScheduleColumn = {
    id: string
    hour: string
} & { [K in (typeof days)[number]]: Subject }

export const columns: ColumnDef<ScheduleColumn>[] = [
    {
        header: 'Hora',
        accessorKey: 'hour',
        id: 'hour',
        cell: ({ row: { original } }) => {
            return <div className="text-center p-1">{original.hour}</div>
        }
    },
    ...days.map((day) => ({
        header: day,
        accessorKey: day,
        id: day,
        cell: ({
            row: { original }
        }: {
            row: { original: ScheduleColumn }
        }) => {
            if (!original[day]) return <div></div>
            return (
                <div
                    style={{
                        backgroundColor: original[day].color
                    }}
                    className="text-white py-3 h-full text-center"
                >
                    {original[day].shortName}
                </div>
            )
        }
    }))
]
