import {
    ScheduleIdColumn,
    scheduleColumns
} from '@/components/schedule/schedule-columns'
import { ScheduleTable } from '@/components/schedule/schedule-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ScheduleProps {
    data: ScheduleIdColumn[]
}

export function Schedule({ data }: ScheduleProps) {
    if (!data)
        return (
            <Card className="col-span-2 lg:col-span-2">
                <CardHeader>
                    <CardTitle>Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                    <h3>You don&apos;t have any schedule yet.</h3>
                </CardContent>
            </Card>
        )
    return (
        <Card className="col-span-2 lg:col-span-2 row-span-3">
            <CardHeader>
                <CardTitle>Schedule</CardTitle>
            </CardHeader>
            <CardContent>
                <ScheduleTable
                    columns={scheduleColumns}
                    data={data}
                    searchKey="hour"
                />
            </CardContent>
        </Card>
    )
}
