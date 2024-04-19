'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Subject } from '@/data/schedules/schedules'
import { days } from '@/lib/schedule.constants'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type NewSubject = Subject & { image: string; id: string }

export type ScheduleGroupColumn = {
    id: string
    hour: string
} & { [K in (typeof days)[number]]: NewSubject[] }

export const scheduleGroupColumns: ColumnDef<ScheduleGroupColumn>[] = [
    {
        header: 'Hora',
        accessorKey: 'hour',
        id: 'hour',
        cell: ({ row: { original } }) => {
            return (
                <div className="text-center p-1">
                    {original.hour}-{parseInt(original.hour) + 1}:30
                </div>
            )
        }
    },
    ...days.map((day) => ({
        header: day,
        accessorKey: day,
        id: day,
        cell: ({
            row: { original }
        }: {
            row: { original: ScheduleGroupColumn }
        }) => {
            if (!original[day])
                // return <div className="bg-emerald-400">libre</div>
                return <div className="bg-emerald-400"></div>

            return (
                <div
                    style={
                        {
                            // backgroundColor: original[day].color
                        }
                    }
                    className="text-white p-1  text-center"
                >
                    {' '}
                    <div className="flex gap-1">
                        {original[day].map((subject) => {
                            return (
                                <Avatar
                                    key={subject.id}
                                    className="size-8"
                                    title={subject.name}
                                >
                                    <AvatarImage
                                        alt={subject.name}
                                        src={subject.image || ''}
                                    />
                                    <AvatarFallback>
                                        {subject.name[0]}
                                    </AvatarFallback>
                                </Avatar>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }))
]
