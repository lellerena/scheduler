'use client'

import { ColumnDef } from '@tanstack/react-table'

import { CellAction } from './cell-action'

export type ScheduleColumn = {
    id: string
    name: string
    visibility: string
    period: string
}

export const columns: ColumnDef<ScheduleColumn>[] = [
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'period',
        header: 'Period'
    },
    {
        accessorKey: 'visibility',
        header: 'Visibility'
    },
    {
        id: 'actions',
        cell: ({ row }) => <CellAction data={row.original} />
    }
]
