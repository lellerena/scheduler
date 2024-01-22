import Link from 'next/link'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ImportIcon } from '@/components/ui/icons/ImportIcon'
import { LayoutGridIcon } from '@/components/ui/icons/LayoutGridIcon'
import { ShareIcon } from '@/components/ui/icons/ShareIcon'
import { CalendarIcon } from '@/components/ui/icons/CalendarIcon'
import { GroupIcon, SettingsIcon } from 'lucide-react'
import ImporScheduleButton from '@/components/import-schedule-button'

export default function HomePage() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Schedule Sharing
                            </CardTitle>
                            <ShareIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                View and share your schedules with friends.
                            </p>
                            <Button className="mt-2">Share Now</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Conflict Matrix
                            </CardTitle>
                            <LayoutGridIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Create and manage conflict matrices for your
                                schedules.
                            </p>
                            <Button className="mt-2">Manage Now</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Uninorte Schedule Import
                            </CardTitle>
                            <ImportIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Import your schedules directly from the Uninorte
                                university page.
                            </p>
                            <div className="mt-2">
                                <ImporScheduleButton withIcon={false} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Manage Schedules
                            </CardTitle>
                            <SettingsIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Manage your schedules and keep track of your
                                tasks.
                            </p>
                            <Link href={'/home/schedules'}>
                                <Button className="mt-2">Manage Now</Button>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Friends Groups
                            </CardTitle>
                            <GroupIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Manage your friends groups and share schedules
                                with them.
                            </p>
                            <Button className="mt-2">Manage Groups</Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
