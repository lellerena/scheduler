'use client'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

import { ScheduleColumn, columns } from './columns'

interface SchedulesClientProps {
    data: ScheduleColumn[]
}

export const SchedulesClient: React.FC<SchedulesClientProps> = ({ data }) => {
    const params = useParams()
    const router = useRouter()

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Schedules (${data.length})`}
                    description="Manage Your Schedules"
                />
                <div className="flex">
                    <Button
                        onClick={() =>
                            router.push(`/${params.storeId}/Schedules/new`)
                        }
                    >
                        <Plus className="mr-2 h-4 w-4" /> Add New
                    </Button>
                </div>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
        </>
    )
}
