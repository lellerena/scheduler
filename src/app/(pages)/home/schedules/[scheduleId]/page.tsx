import { Subject, getScheduleById } from '@/data/schedules/schedules'
import { ScheduleIdClient } from './components/client'
import { ScheduleColumn } from './components/columns'

export const days = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado'
]

const generateHours = (start: number, end: number) => {
    const hours = []
    for (let i = start; i <= end; i++) {
        hours.push(`${i}:30`)
    }
    return hours
}

const colors = [
    '#F87171',
    '#FBBF24',
    '#34D399',
    '#60A5FA',
    '#A78BFA',
    '#F472B6',
    '#FCD34D',
    '#86EFAC',
    '#818CF8',
    '#D4D4D8',
    '#EC4899',
    '#F97316',
    '#10B981',
    '#3B82F6'
]
export const hours = generateHours(6, 20)

interface ScheduleIdPageProps {
    params: {
        scheduleId: string
    }
}

export default async function ScheduleIdPage({
    params: { scheduleId }
}: ScheduleIdPageProps) {
    const schedule = await getScheduleById(scheduleId)
    const data = schedule.scheduleByHours.data as []

    const tableData = [] as ScheduleColumn[]
    hours.forEach((hour, hourindex) => {
        const classes = data[hourindex] as Subject[]
        const sh: ScheduleColumn = {} as ScheduleColumn
        sh.hour = hour
        days.forEach((day, i) => {
            sh[day] = data[hourindex][i]
            if (classes[i]) {
                sh[day].color =
                    colors[Math.floor(Math.random() * colors.length)]
            }
        })
        tableData.push(sh)
    })
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <ScheduleIdClient data={schedule} tableData={tableData} />
        </div>
    )
}
