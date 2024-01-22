import { getDraftByUserId } from '@/actions/draft/draft'
import { currentUser } from '@/lib/auth'
import NewSchedule from '../[scheduleId]/components/newSchedule'
import { useNewScheduleModal } from '@/hooks/use-new-schedule-store'

export default async function page() {
    const userId = (await currentUser()).id
    const draft = (await getDraftByUserId(userId)) || ([] as any)

    return (
        <div>
            <NewSchedule schedule={draft.content} />
        </div>
    )
}
