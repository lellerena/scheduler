import { format } from 'date-fns'

import { ScheduleColumn } from './components/columns'
import { SchedulesClient } from './components/client'

import { getSchedulesByUserId } from '@/data/schedules/schedules'

const MySchedulesPage = async ({ params }: { params: { storeId: string } }) => {
    const Schedules = await getSchedulesByUserId(params.storeId)

    const formattedSchedules: ScheduleColumn[] = Schedules.map((item) => {
        return {
            id: item.id,
            name: item.name,
            visibility: item.visibility,
            period: item.period
        }
    })

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SchedulesClient data={formattedSchedules} />
            </div>
        </div>
    )
}

export default MySchedulesPage
