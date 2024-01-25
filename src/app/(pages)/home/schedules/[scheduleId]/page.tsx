import { Subject, getScheduleById } from '@/data/schedules/schedules'
import { ScheduleIdClient } from './components/client'
import { ScheduleIdColumn } from '../../../../../components/schedule/schedule-columns'
import NewSchedule from './components/newSchedule'
import { colors, days, hours } from '@/lib/schedule.constants'
import { redirect } from 'next/navigation'

interface ScheduleIdPageProps {
    params: {
        scheduleId: string
    }
}

export default async function ScheduleIdPage({
    params: { scheduleId }
}: ScheduleIdPageProps) {
    const schedule = await getScheduleById(scheduleId)

    if (!schedule) {
        redirect('/home/schedules')
    }

    const tableData = schedule?.scheduleByHours as unknown as ScheduleIdColumn[]

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <ScheduleIdClient data={schedule} tableData={tableData} />
        </div>
    )
}
