import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import { MeCard } from './components/meCard'
import { currentUser } from '@/lib/auth'
import { Schedule } from './components/schedule'
import { getCurrentScheduleByUserId } from '@/data/schedules/schedules'
import { ScheduleIdColumn } from '@/components/schedule/schedule-columns'

export default async function ProfilePage() {
    const user = await currentUser()
    const schedule = await getCurrentScheduleByUserId(user.id)
    const scheduleData =
        schedule?.scheduleByHours as unknown as ScheduleIdColumn[]
    return (
        <div className="flex flex-col w-full min-h-screen">
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-center">
                    <MeCard data={user} />
                    <Schedule data={scheduleData} />

                    <Card className="col-span-2 lg:col-span-1">
                        <CardHeader>
                            <CardTitle>Friends/Groups</CardTitle>
                        </CardHeader>
                        <CardContent />
                    </Card>
                    <Card className="col-span-2 lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Conflicts Matrix</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {/* <HeatmapChart className="w-full aspect-[16/9]" /> */}
                        </CardContent>
                    </Card>

                    <Card className="col-span-2 lg:col-span-1">
                        <CardHeader>
                            <CardTitle>Import Schedule</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full" variant="outline">
                                Import from Uninorte
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="col-span-2 lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Compare Schedules</CardTitle>
                        </CardHeader>
                        <CardContent />
                    </Card>
                </div>
            </main>
        </div>
    )
}
